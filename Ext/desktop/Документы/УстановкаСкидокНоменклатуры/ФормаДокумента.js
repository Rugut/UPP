Ext.define('Документы.УстановкаСкидокНоменклатуры.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 470,width: 638,
	iconCls: 'bogus',
	title: 'Установка скидок номенклатуры',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:194px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:418px;width:536px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:94px;top:394px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипСкидкиНаценки',
			style: 'position:absolute;left:406px;top:81px;width:224px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентСкидкиНаценки',
			style: 'position:absolute;left:352px;top:182px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеУсловия',
			style: 'position:absolute;left:94px;top:105px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Валюта',
			style: 'position:absolute;left:406px;top:33px;width:224px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОграничениеСкидки',
			style: 'position:absolute;left:524px;top:182px;width:106px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Условие',
			style: 'position:absolute;left:94px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала',
			style: 'position:absolute;left:94px;top:57px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончания',
			style: 'position:absolute;left:194px;top:57px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидСкидки',
			style: 'position:absolute;left:406px;top:57px;width:224px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Качество',
			style: 'position:absolute;left:72px;top:182px;width:220px;height:19px;',
		},
	]
});