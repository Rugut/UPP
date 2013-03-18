Ext.define('Документы.Опрос.ФормаВводаОтветаАдрес',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:330px;height:249px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ответ',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Регион:',
			style: 'position:absolute;left:8px;top:29px;width:94px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Регион',
			style: 'position:absolute;left:102px;top:29px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Район:',
			style: 'position:absolute;left:8px;top:53px;width:94px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Район',
			style: 'position:absolute;left:102px;top:53px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Город:',
			style: 'position:absolute;left:8px;top:77px;width:94px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Город',
			style: 'position:absolute;left:102px;top:77px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Нас. пункт:',
			style: 'position:absolute;left:8px;top:101px;width:94px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаселенныйПункт',
			style: 'position:absolute;left:102px;top:101px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись10',
			text: 'Улица:',
			style: 'position:absolute;left:8px;top:125px;width:94px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Улица',
			style: 'position:absolute;left:102px;top:125px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись11',
			text: 'Дом:',
			style: 'position:absolute;left:8px;top:149px;width:94px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дом',
			style: 'position:absolute;left:102px;top:149px;width:36px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись12',
			text: 'Корпус:',
			style: 'position:absolute;left:138px;top:149px;width:52px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Корпус',
			style: 'position:absolute;left:190px;top:149px;width:36px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись13',
			text: 'Квартира:',
			style: 'position:absolute;left:226px;top:149px;width:60px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Квартира',
			style: 'position:absolute;left:286px;top:149px;width:36px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:102px;top:197px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:224px;width:330px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись15',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:197px;width:94px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись14',
			text: 'Индекс:',
			style: 'position:absolute;left:8px;top:173px;width:94px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Индекс',
			style: 'position:absolute;left:102px;top:173px;width:60px;height:19px;',
		},
	]
});