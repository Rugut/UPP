Ext.define('Обработки.ПомощникНастройкиОбменаДаннымиСРозничнойТорговлей.ДополнительныеНастройки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:494px;height:244px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Дополнительные настройки обмена данными',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:219px;width:494px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				'-',
				{
					text:'Отмена',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоЭлементовВТранзакцииНаЗапись',
			text: 'Элементов в транзакции:',
			style: 'position:absolute;left:25px;top:65px;width:130px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоЭлементовВТранзакцииНаЗапись',
			style: 'position:absolute;left:161px;top:65px;width:120px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Сжатие исходящего файла обмена',
			style: 'position:absolute;left:25px;top:169px;width:199px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПарольНаПрием',
			style: 'position:absolute;left:161px;top:89px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПарольНаПрием',
			text: 'Пароль распаковки:',
			style: 'position:absolute;left:25px;top:89px;width:130px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПарольНаОтправку',
			style: 'position:absolute;left:161px;top:192px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПарольНаЗапись',
			text: 'Пароль сжатия:',
			style: 'position:absolute;left:73px;top:192px;width:87px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоЭлементовВТранзакцииНаЧтение',
			text: 'Элементов в транзакции:',
			style: 'position:absolute;left:25px;top:146px;width:130px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоЭлементовВТранзакцииНаЧтение',
			style: 'position:absolute;left:161px;top:146px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИмяФайлаПротокола',
			text: 'Имя файла, протокола:',
			style: 'position:absolute;left:8px;top:8px;width:147px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяФайлаПротоколаОбмена',
			style: 'position:absolute;left:161px;top:8px;width:325px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДопНастройкиДляЗагрузкиДанных',
			text: 'Настройки для загрузки данных:',
			style: 'position:absolute;left:8px;top:41px;width:170px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДопНастройкиДляВыгрузкиДанных',
			text: 'Настройки для выгрузки данных:',
			style: 'position:absolute;left:8px;top:122px;width:176px;height:19px;',
		},
	]
});