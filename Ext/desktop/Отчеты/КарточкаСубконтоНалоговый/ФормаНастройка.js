Ext.define('Отчеты.КарточкаСубконтоНалоговый.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	height: 309,width: 364,
	iconCls: 'bogus',
	title: 'Настройка: Карточка субконто',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:284px;width:364px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Отмена',
				},
				{
					text:'Справка',
				},
				{
					text:'кнОК',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:8px;width:350px;height:268px;',
			height: 268,width: 350,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаДатаНач',
			style: 'position:absolute;left:124px;top:6px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаДатаКон',
			style: 'position:absolute;left:234px;top:6px;width:86px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:322px;top:6px;width:20px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:124px;top:30px;width:218px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:120px;width:336px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:144px;width:336px;height:98px;',
			height: 98,width: 336,
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидУчета',
			style: 'position:absolute;left:124px;top:76px;width:120px;height:19px;',
		},
					]
				},
				{
					title:'Отбор',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:336px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:336px;height:210px;',
			height: 210,width: 336,
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
					]
				},
			]
		},
	]
});