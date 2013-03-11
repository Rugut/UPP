Ext.define('Отчеты.АнализСубконтоМеждународный.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	height: 261,width: 432,
	iconCls: 'bogus',
	title: 'Настройка',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:236px;width:432px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:416px;height:220px;',
			height: 220,width: 416,
			items:
			[
				{
					title:'Общие',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:88px;top:7px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:188px;top:7px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:270px;top:7px;width:19px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:88px;top:31px;width:200px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:96px;width:242px;height:96px;',
			height: 96,width: 242,
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
			style: 'position:absolute;left:6px;top:72px;width:242px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Отбор',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:402px;height:162px;',
			height: 162,width: 402,
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
			style: 'position:absolute;left:6px;top:6px;width:402px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Сортировка',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:48px;width:182px;height:146px;',
			height: 146,width: 182,
			columns:
			[
				{
					text:'Направление',
				},
				{
					text:'Имя',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:220px;top:48px;width:188px;height:146px;',
			height: 146,width: 188,
			columns:
			[
				{
					text:'Поле',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:24px;width:182px;height:24px;',
			items:
			[
				{
					text:'СменитьНаправление',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'button',
			name: 'ДобавитьСортировку',
			text: '',
			style: 'position:absolute;left:192px;top:68px;width:24px;height:24px;',
		},
		{
			xtype: 'button',
			name: 'УдалитьСортировку',
			text: '',
			style: 'position:absolute;left:192px;top:96px;width:24px;height:24px;',
		},
					]
				},
			]
		},
	]
});