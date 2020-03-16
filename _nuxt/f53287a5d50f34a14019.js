(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{498:function(n,e,t){"use strict";t.r(e),e.default="---\nheader: LEGv8 \ndescription: Not as complicated as your ARM.\n---\n\n# Hardware Terminology\n\n### Doubleword\n\nGroups of 64 bits.\n\n### Word\n\nGroups of 32 bits.\n\n### Registers\n\nRegisters are used for frequently accessed data.\n\nIn LEGv8, there are **32 registers** that are 64 bits wide. They are referred to by their number ranging from `X0-X30`. The final register is `XZR` which is the 'zero register' that always contains 0.\n\nRegisters|Purpose|Notes\n:-----:|:-----:|:-----:\n`X0`|Return value|The return value of a function is stored here.\n`X1-X7`|Passed parameters|Function argument variable storage.\n`X8`|Indirect result location register| \n`X9-X15`|Temporary variables| \n`X16-X17`|Scratch/temporary register|\n`X18`|Platform/temporary register| \n`X19-X27`|Saved| \n`X28`|Stack Pointer (SP)|Points to the memory address of the top of the stack.\n`X29`|Frame Pointer (FP)|Points to the memory address at the bottom of the stack.\n`X30`|Link Register (LR)|Points to the return address after branching.\n`XZR`|Zero Register (XZR)|Contains a constant value of 0.\n\n### Memory\n\nThere are $2^{62}$ memory words. Memory is set up like a single dimensional array.\n\nLEGv8 uses **byte addressing**, so each memory address index (with length of one byte) can be accessed. Therefore, since LEGv8 is a 64 bit architecture, memory addresses are split up into groups of 8 bytes or 64 bits (a [doubleword](#doubleword)).\n\n```\nMemory[0]\nMemory[8]\nMemory[16]\n...\n```\n\n### Stack\n\nA stack is a portion of memory allocated towards a program.\n\n# Computer Instruction Representation\n\n### Instruction\n\nA series of 32 binary bits that represent an instruction.\n\n## Fields\n\nA segment of an instruction. Essentially, the instruction is broken up into a certain number of bits to represent a meaningful operand.\n\n### opcode\n\nAn opcode is the type of operation that is being executed. For example `ADD`, `ADDI` or `LDUR`.\n\n### Rm\n\nRm is the second register source operand\n\n### shamt\n\nshamt is the shift amount.\n\n### Rn\n\nRn is the first register source operand.\n\n### Rd\n\nRd is the destination register operand. It receives the result of the operation.\n\n### address\n\nMemory address offset\n\n### op2\n\nOpcode option.\n\n### Rn\n\nRn is the CPU register.\n\n### Rt\n\nRt is the memory address.\n\n### immediate\n\nImmediate is the constant.\n\n### pc_offset\n\nPC_Offset is the the program counter offset. This specifies how many bytes in the instruction memory to move from the current address the program counter is pointing to.\n\n### R-Type Instruction (Register)\n\nR-Type instructions manipulate registers.\n\n**opcode**|**Rm**|**shamt**|**Rn**|**Rd**\n:-----:|:-----:|:-----:|:-----:|:-----:\n11 bits|5 bits|6 bits|5 bits|5 bits\n\nIn a normal machine instruction, this would look like: `opcode Rd, shamt, Rn, Rm`.\n\n#### R-Type Instruction Example\n\nA conversion from an instruction to a decimal representation of the instruction:\n\n`ADD X1, X2, X3` $\\implies$ `1112 3 0 2 1`\n\n### D-Type Instruction (Data Transfer)\n\nR-Type instructions manipulates data between the registers and memory.\n\n**opcode**|**address**|**op2**|**Rn**|**Rt**\n:-----:|:-----:|:-----:|:-----:|:-----:\n11 bits|9 bits|2 bits|5 bits|5 bits\n\nIn a normal machine instruction, this would look like: `opcode Rt, [Rn, #address]`.\n\n#### D-Type Instruction Example\n\nA conversion from an instruction to a decimal representation of the instruction:\n\n`LDUR X1, [X2, #3]` $\\implies$ `1986 3 0 2 1`\n\n### I-Type Instruction (Immediate)\n\nR-Type instructions manipulate constants.\n\n**opcode**|**immediate**|**Rn**|**Rd**\n:-----:|:-----:|:-----:|:-----:|:-----:\n10 bits|12 bits|5 bits|5 bits\n\nIn a normal machine instruction, this would look like: `opcode Rd, Rn, #immediate`.\n\n#### I-Type Instruction Example\n\nA conversion from an instruction to a decimal representation of the instruction:\n\n`ADDI X1, X2, #3` $\\implies$ `836 3 2 1`\n\n### B-Type Instruction (Branch)\n\nB-Type instructions handle branching (jumping).\n\n**opcode**|**pc_offset**\n:-----:|:-----:\n6 bits|26 bits|\n\nIn a normal machine instruction, this would look like: `opcode pc_offset`.\n\n#### B-Type Instruction Example\n\nA conversion from an instruction to a decimal representation of the instruction:\n\n`B Skip` $\\implies$ `5 25`\n\nwhere `Skip` is the number of bytes to skip. In this case, it will skip $25$ bytes $\\cdot \\text{ } 4 = 100$ bits.\n\n#### B-Type Instructions\n\nB-Type Instruction|Meaning|Note\n:-----:|:-----:|:-----:\n`B Label`|Branch|Jumps to `Label`.\n`BR LR`|Branch to register|Jumps to register `LR`'s address\n`BL Label`|Branch with link|Jumps to `Label` and stores the address of the next instruction.\n`B.cond Label`|Branch conditionally|Jump to label based on condition code values\n\n### CB-Type Instruction (Condiitonal Branch)\n\nCB-Type instructions handle conditional branching.\n\n**opcode**|**pc_offset**|**Rt**\n:-----:|:-----:|:-----:\n8 bits|19 bits|5 bits\n\nIn a normal machine instruction, this would look like: `opcode Rt, pc_offset`.\n\n#### CB-Type Instruction Example\n\nA conversion from an instruction to a decimal representation of the instruction:\n\n`CBZ X1, Skip` $\\implies$ `181 25 1`\n\nwhere `Skip` is the number of bytes to skip. In this case, it will skip $25 bytes \\cdot 4 = 100 bits$.\n\n### IW-Type Instruction (Immediate Wide)\n\nIW-Type instructions handle large constants.\n\n**opcode**|**block_number**|**constant**|**Rd**\n:-----:|:-----:|:-----:|:-----:\n9 bits|2 bits|16 bits|5 bits\n\nIn a normal machine instruction, this would look like: `opcode Rd, constant, LSL block_number`. \n\n`block_number` is limited to 0, 16, 32, 48.\n\n#### IW-Type Instruction Example\n\nA conversion from an instruction to a decimal representation of the instruction:\n\n`MOVZ X1, 256, LSL 0` $\\implies$ `421 1 256, 0`\n\n**B-Type Instruction**|**Meaning**|**Note**\n:-----:|:-----:|:-----:\n`MOVZ register, constant, LSL shift_amount`|Move wide with zeroes|Set the specified quadrant of the register to the constant specified and set the other quadrants to zero.\n`MOVK register, constant, LSL shift_amount`|Move wide with keep|Set the specified quadrant of the register to the constant specified and keep the other quadrants the same.\n\n## Supporting Computer Hardware Procedures\n\n### Program Counter\n\nThe program counter holds the address of the current instruction being executed. \n\n### Stack\n\nA LIFO queue. A stack is a memory block allocated to a program.\n\n### Stack Pointer (SP)\n\nThe stack pointer points to the top of the stack (where the current operation is being done).\n\n## Translating and Starting a Program\n\nPipeline of a program:\n\n$\\fbox{\\text{Program}} \\rightarrow \\text{Compiler} \\rightarrow \\fbox{\\text{Assembly language program}} \\rightarrow \\text{Assembler} \\rightarrow \\fbox{Object File} \\rightarrow \\text{Linker} \\rightarrow \\fbox{Executable} \\rightarrow \\text{Loader} \\rightarrow \\fbox{\\text{Memory}}$\n\n### Compiler\n\nA **compiler** converts a textual representation of code (through keywords and symbols) into assembly language.\n\nIt uses pre-defined templates. \n\n### Assember\n\nAn **assembler** converts assembly language code into an object file (binary) or a machine program.\n\nIt allocates space in memory for the instructions and data.\n\nAlso, it builds a symbol table - that is, a table containing pairs of symbols its corresponding address.\n\n#### Object File\n\nAn **object file** contains the machine language instructions, data and info needed to place instructions into memory.\n\n**Object File Part**|**Description**\n:-----:|:-----:\nObject File Header|The size and position of the parts of the object file.\nText Segment|The machine language code.\nStatic Data Segment|The data allocated for the life of the program\nRelocation Information|Instructions and data word addresses in memory\nSymbol Table|Remaining labels not defined like external references.\n\n### Linker\n\nTurns assembled [object files](#object-file) into an [executable](#executable). It also allows for re-linking through a link editor. To reduce the number of re-linking steps, the link editor looks for diffs in addresses and replaces them accordingly.\n\n1. Place code and data modules symbolically in memory.\n2. Determine addresses of data and instruction labels.\n3. Patch internal and external references\n\n#### Executable\n\nAn **executable** is a simply an object file that contains no unresolved references.\n\n### Loader\n\nA loader takes the [executable](#executable) and reads it into memory.\n\n#### Statically Linked Libraries\n\nA library that is linked to a program during link time.\n\n#### Dynamically Linked Libraries\n\nA library routine that is linked to a program during execution time.\n\n# Building a Simple LEGv8 Computer\n\n## Arithmetic Logic Unit (ALU)\n\nThe arithmetic logic unit handles various computational operations such as ANDing, ORing, adding, subtracting, NORing and passing inputs.\n\n| ALU Control Lines | Function |\n| -----------------   |\n| 0000 | AND          |\n| 0001 | OR           |\n| 0010 | add          |\n| 0110 | subtract     |\n| 0111 | pass input b |\n| 1100 | NOR          |\n\n# Pipelining\n\nPipelining is a technique where multiple instructions are overlapped in execution. It is useful for shaving down time for a large amount of instructions since it increases instruction throughput (not decreasing execution time).\n\n## Datapath for LEGv8\n\nInstructions can be split up into five different stages in order to implement the pipeline. Since there are five stages, five instructions can be run each clock cycle.\n\n### Instruction Fetch\n\nGet the instruction from the program counter.\n\n### Instruction Decode / Register File Read\n\nRetrieve segments of instruction to see what the instruction type it is. Also read register values from the register file if needed.\n\n### Execution / Address Calculation\n\nRun any calculations.\n\n### Data Memory Access\n\nAccess memory or write to memory.\n\n### Write Back\n\nWrite data back into register file.\n\n## Data Hazards\n\nWhen an instruction is dependent on an earlier instruction still being processed in the pipeline. \n\n### Forwarding\n\nA solution to data hazards is to add hardware to retrieve the missing item early from internal resources.\n\n### Stalling\n\nAnother solution to solving the data hazard issue is to stall the pipeline, bubble or insert a `NOP` (no operation) instruction.\n\n### Predicting\n\nIt can also try predicting\n"}}]);