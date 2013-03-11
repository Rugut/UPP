Ext.define('Документы.Опрос.ФормаВводаОтветовТеста',
	{
	extend: 'Ext.window.Window',
	height: 561,width: 366,
	iconCls: 'bogus',
	title: 'Опрос',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:261px;width:350px;height:249px;',
			height: 249,width: 350,
			items:
			[
				{
					title:'Строка',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Строка',
			style: 'position:absolute;left:0px;top:6px;width:350px;height:19px;',
		},
					]
				},
				{
					title:'Булево',
					items:
					[
					]
				},
				{
					title:'ОдинИзВариантовОтвета',
					items:
					[
					]
				},
				{
					title:'НесколькоВариантовОтвета',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:350px;height:238px;',
			height: 238,width: 350,
			columns:
			[
				{
					text:'Выбор',
				},
				{
					text:'НомерСтроки',
				},
				{
					text:'ВариантОтвета',
				},
				{
					text:'Ответ',
				},
			]
		},
					]
				},
				{
					title:'Адрес',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Регион',
			style: 'position:absolute;left:94px;top:0px;width:250px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Район',
			style: 'position:absolute;left:94px;top:24px;width:250px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Город',
			style: 'position:absolute;left:94px;top:48px;width:250px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаселенныйПункт',
			style: 'position:absolute;left:94px;top:72px;width:250px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Улица',
			style: 'position:absolute;left:94px;top:96px;width:250px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дом',
			style: 'position:absolute;left:94px;top:120px;width:35px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Корпус',
			style: 'position:absolute;left:192px;top:120px;width:35px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Квартира',
			style: 'position:absolute;left:309px;top:120px;width:35px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КомментарийАдрес',
			style: 'position:absolute;left:94px;top:168px;width:250px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Индекс',
			style: 'position:absolute;left:94px;top:144px;width:60px;height:19px;',
		},
					]
				},
				{
					title:'Телефон',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Поле1',
			style: 'position:absolute;left:79px;top:24px;width:140px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Поле2',
			style: 'position:absolute;left:79px;top:48px;width:140px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Поле3',
			style: 'position:absolute;left:79px;top:0px;width:124px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Поле4',
			style: 'position:absolute;left:287px;top:0px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КомментарийТелефон',
			style: 'position:absolute;left:79px;top:72px;width:268px;height:19px;',
		},
					]
				},
				{
					title:'АдресЭлектроннойПочты',
				},
				{
					title:'ВебСтраница',
				},
				{
					title:'Другое',
				},
				{
					title:'Табличный',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:350px;height:238px;',
			height: 238,width: 350,
			columns:
			[
			]
		},
					]
				},
				{
					title:'Текст',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаТекст',
			style: 'position:absolute;left:0px;top:0px;width:350px;height:238px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:536px;width:366px;height:25px;',
			items:
			[
				{
					text:'Далее',
				},
				{
					text:'Назад',
				},
				{
					text:'ОК',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:29px;width:350px;height:162px;',
			height: 162,width: 350,
			items:
			[
				{
					title:'Страница1',
					items:
					[
					]
				},
			]
		},
	]
});