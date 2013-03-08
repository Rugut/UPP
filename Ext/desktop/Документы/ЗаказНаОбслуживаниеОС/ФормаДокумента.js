Ext.define('Документы.ЗаказНаОбслуживаниеОС.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 421,width: 386,
	iconCls: 'bogus',
	title: 'Заказ на обслуживание ОС',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:146px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:246px;top:33px;width:132px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:369px;width:282px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:346px;width:282px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Услуга',
			style: 'position:absolute;left:146px;top:57px;width:232px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПричинаЗаказаНаОбслуживаниеОС',
			style: 'position:absolute;left:146px;top:81px;width:232px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачалаОбслуживанияОС',
			style: 'position:absolute;left:146px;top:129px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидОбслуживанияОС',
			style: 'position:absolute;left:146px;top:105px;width:232px;height:19px;',
		},
	]
});