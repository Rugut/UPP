Ext.define('Обработки.ПомощникНастройкиОбменаДаннымиУТУПП.ДополнительныеНастройки',
	{
	extend: 'Ext.window.Window',
	height: 244,width: 494,
	iconCls: 'bogus',
	title: 'Дополнительные настройки обмена данными',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:219px;width:494px;height:25px;',
			items:
			[
				{
					text:'Отмена',
				},
				{
					text:'ОсновныеДействияФормыВыполнить',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоЭлементовВТранзакцииНаЗапись',
			style: 'position:absolute;left:161px;top:65px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПарольНаПрием',
			style: 'position:absolute;left:161px;top:89px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПарольНаОтправку',
			style: 'position:absolute;left:161px;top:192px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоЭлементовВТранзакцииНаЧтение',
			style: 'position:absolute;left:161px;top:146px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяФайлаПротоколаОбмена',
			style: 'position:absolute;left:161px;top:8px;width:325px;height:19px;',
		},
	]
});