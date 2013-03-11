Ext.define('Справочники.ОтправкиФСС.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 308,width: 352,
	iconCls: 'bogus',
	title: 'Отправка на сервер ФСС',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:352px;height:25px;',
			items:
			[
				{
					text:'Разделитель2',
				},
				{
					text:'НайтиВСписке',
				},
				{
					text:'Выгрузка',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'ВыгрузитьПакет',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Обновить',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:283px;width:352px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИдентификаторОтправкиНаСервере',
			style: 'position:absolute;left:95px;top:33px;width:249px;height:19px;',
		},
	]
});