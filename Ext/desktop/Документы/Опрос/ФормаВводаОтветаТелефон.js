Ext.define('Документы.Опрос.ФормаВводаОтветаТелефон',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:341px;height:153px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ответ',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:128px;width:341px;height:25px;',
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
			name: 'Надпись6',
			text: 'Код страны:',
			style: 'position:absolute;left:8px;top:53px;width:79px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Поле1',
			style: 'position:absolute;left:87px;top:53px;width:106px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Код города:',
			style: 'position:absolute;left:8px;top:77px;width:79px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Поле2',
			style: 'position:absolute;left:87px;top:77px;width:106px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Номер :',
			style: 'position:absolute;left:8px;top:29px;width:79px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Поле3',
			style: 'position:absolute;left:87px;top:29px;width:106px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Добавочный:',
			style: 'position:absolute;left:193px;top:29px;width:80px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Поле4',
			style: 'position:absolute;left:273px;top:29px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:87px;top:101px;width:246px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись15',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:101px;width:79px;height:19px;text-align:left;',
		},
	]
});