Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.РегистрСведений_ВложенияНеформализованныхДокументов_ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:667px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Список Вложения неформализованных документов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:651px;height:259px;',
			height: 259,width: 651,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Документ',
					width:'185',
				},
				{
					text:'Имя файла',
					width:'198',
				},
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Размер (в байтах)',
					width:'124',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:667px;height:25px;',
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