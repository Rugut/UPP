Ext.define('Справочники.КонвертацииИзИнформационныхБаз1СПредприятия77.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:700px;height:190px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Конвертации из информационных баз 1С:Предприятия 7.7',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:684px;height:149px;',
			height: 149,width: 684,
			columns:
			[
				{
					text:'',
					width:'24',
				},
				{
					text:'Конфигурация',
					width:'250',
				},
				{
					text:'Идентификатор конфигурации',
					width:'120',
				},
				{
					text:'Номер релиза',
					width:'100',
				},
				{
					text:'Помощник',
					width:'100',
				},
				{
					text:'Обработка',
					width:'100',
				},
				{
					text:'Правила',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:700px;height:25px;',
			items:
			[
				{
					text:'Заменить файлы конвертации',
				},
				'-',
				{
					text:'Записать файлы конвертации на диск',
				},
				'-',
				{
					text:'Восстановить файлы конвертации',
				},
			]
		},
	]
});