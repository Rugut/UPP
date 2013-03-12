Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.РегистрСведений_ХранилищеЭлектронныхПредставленийРегламентированныхОтчетов_ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:634px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Список Файлы с электронными представлениями регламентированных отчетов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:618px;height:259px;',
			height: 259,width: 618,
			columns:
			[
				{
					text:'',
					width:'24',
				},
				{
					text:'Описание',
					width:'185',
				},
				{
					text:'Имя файла',
					width:'198',
				},
				{
					text:'Тип файла отчетности',
					width:'126',
				},
				{
					text:'Размер (в байтах)',
					width:'118',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:634px;height:25px;',
			items:
			[
				{
					text:'Выгрузить',
				},
				'-',
			]
		},
	]
});