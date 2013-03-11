Ext.define('Обработки.ВыгрузкаСпискаОбъектов.Форма',
	{
	extend: 'Ext.window.Window',
	height: 317,width: 426,
	iconCls: 'bogus',
	title: 'Выгрузка списка объектов',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:426px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:292px;width:426px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыВыполнить',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:103px;width:410px;height:181px;',
			height: 181,width: 410,
			columns:
			[
				{
					text:'КартинкаЭлемента',
				},
				{
					text:'Объект',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяФайлаОбмена',
			style: 'position:absolute;left:100px;top:33px;width:318px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:79px;width:410px;height:24px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'ДействиеПодбор',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие4',
				},
			]
		},
	]
});