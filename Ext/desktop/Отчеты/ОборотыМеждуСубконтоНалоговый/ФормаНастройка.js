Ext.define('Отчеты.ОборотыМеждуСубконтоНалоговый.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	height: 292,width: 400,
	iconCls: 'bogus',
	title: 'Настройка Обороты между субконто',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:267px;width:400px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОК',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:384px;height:251px;',
			height: 251,width: 384,
			items:
			[
				{
					title:'Общее',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:88px;top:6px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:232px;top:6px;width:120px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:355px;top:6px;width:21px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:88px;top:32px;width:288px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:140px;width:182px;height:85px;',
			height: 85,width: 182,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ВидСубконто',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:194px;top:140px;width:182px;height:85px;',
			height: 85,width: 182,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ВидСубконто',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:116px;width:182px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:194px;top:116px;width:182px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидУчета',
			style: 'position:absolute;left:88px;top:56px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Детализация',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:48px;width:222px;height:177px;',
			height: 177,width: 222,
			columns:
			[
				{
					text:'Поле',
				},
				{
					text:'Тип',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:24px;width:222px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:260px;top:48px;width:116px;height:177px;',
			height: 177,width: 116,
			columns:
			[
				{
					text:'Поле',
				},
			]
		},
		{
			xtype: 'button',
			name: 'Добавить',
			text: '',
			style: 'position:absolute;left:232px;top:72px;width:24px;height:24px;',
		},
		{
			xtype: 'button',
			name: 'Удалить',
			text: '',
			style: 'position:absolute;left:232px;top:100px;width:24px;height:24px;',
		},
					]
				},
				{
					title:'Отбор',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:370px;height:194px;',
			height: 194,width: 370,
			columns:
			[
				{
					text:'Использование',
				},
				{
					text:'Имя',
				},
				{
					text:'ВидСравнения',
				},
				{
					text:'Значение',
				},
				{
					text:'ЗначениеС',
				},
				{
					text:'ЗначениеПо',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:370px;height:24px;',
			items:
			[
			]
		},
					]
				},
			]
		},
	]
});