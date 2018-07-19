
let hdr = {
    Comm: "进程命令",
    CPU: "CPU 使用率，每个内核按 100% 计算",
    MEM: "内存使用率",
    CPUTime: "CPU 运行时长，表示当前进程所有消耗的计算资源，交给单个内核来承担的话，所需要的时间长度",
    TaskCPU: "当前运行在哪个内核上",
    RRate: "磁盘读取速率",
    WRate: "磁盘写入速率",
    VmSize: "虚拟地址空间大小，是进程所能访问的全部逻辑地址空间的大小",
    VmRSS: "进程当前实际占用的物理内存，包含 VmRSS = RssAnon + RssFile + RssShmem 三部分",
    VmPTE: "进程内存的所有页表所占的大小",
    VmSwap: "交换到 swap 分区的匿名私有页的大小（不包括 shmem 交换所使用的内存）",
    Pid: "进程 ID",
    Nlwp: "进程内的线程数",
    State: "进程状态（R: 运行, S: 睡眠, D: 不可中断的睡眠, Z: 僵尸, T: 处于被跟踪状态或停止状态, W: paging）",
    Nice: "进程的静态优先级",
    Priority: "进程的动态优先级",
    User: "启动进程的用户",
    Uid: "启动进程的用户的 ID",
    Read: "进程从磁盘读取的数据总和，包括子线程",
    Write: "进程写入磁盘的数据总和，包括子线程",
    Cmdline: "完整的进程命令，包括参数等",
}

let state = {
    R: "正在运行",
    S: "可中断的睡眠",
    D: "不可中断的睡眠",
    Z: "僵尸",
    T: "处于被跟踪状态或停止状态（基于信号）",
    W: "paging"
}

let detailsTabs = {
    thread: "进程中的所有线程信息",
    limit: "进程的资源限制",
    stack: "所有线程的内部调用状态"
}

let limits = {
    Limit: "所限制的资源",
    SoftLimit: "当前系统生效的设置值",
    HardLimit: "系统中所能设定的最大值",
    Units: "衡量单位",
}

let stack = {

}

exports.hdr = hdr;
exports.state = state;
exports.detailsTabs = detailsTabs;
exports.limits = limits;
exports.stack = stack;