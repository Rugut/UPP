Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.РегистрСведений_ВложенияНеформализованныхДокументов_ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 667,
	iconCls: 'bogus',
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
					text:'Картинка',
				},
				{
					text:'НеформализованныйДокумент',
				},
				{
					text:'ИмяФайла',
				},
				{
					text:'Тип',
				},
				{
					text:'Размер',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:667px;height:25px;',
			items:
			[
				{
					text:'ВыгрузитьВФайл',
				},
				{
					text:'Разделитель4',
				},
			]
		},
	]
});