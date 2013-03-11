Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.РегистрСведений_ХранилищеЭлектронныхПредставленийРегламентированныхОтчетов_ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 634,
	iconCls: 'bogus',
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
					text:'Картинка',
				},
				{
					text:'ЭлектронноеПредставление',
				},
				{
					text:'ИмяФайла',
				},
				{
					text:'ТипФайлаОтчетности',
				},
				{
					text:'Размер',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:634px;height:25px;',
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