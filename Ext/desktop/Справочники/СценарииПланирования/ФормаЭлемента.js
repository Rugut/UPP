Ext.define('Справочники.СценарииПланирования.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 291,width: 543,
	iconCls: 'bogus',
	title: 'Сценарии планирования',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:266px;width:543px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:543px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие4',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:529px;height:225px;',
			height: 225,width: 529,
			items:
			[
				{
					title:'Основная',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:157px;top:6px;width:240px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Периодичность',
			style: 'position:absolute;left:157px;top:58px;width:364px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДетализацияПланирования',
			style: 'position:absolute;left:157px;top:32px;width:364px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Валюта',
			style: 'position:absolute;left:157px;top:84px;width:107px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:441px;top:6px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'КурсыВалют',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВалютаКурсов',
			style: 'position:absolute;left:58px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:79px;width:515px;height:120px;',
			height: 120,width: 515,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Период',
				},
				{
					text:'Курс',
				},
				{
					text:'Кратность',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:55px;width:515px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'button',
			name: 'Заполнить',
			text: 'Заполнить',
			style: 'position:absolute;left:144px;top:6px;width:80px;height:19px;',
		},
					]
				},
			]
		},
	]
});