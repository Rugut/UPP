Ext.define('Обработки.ПодборПараметровРасшифровкиПлатежа.ПараметрыЗаполнения',
	{
	extend: 'Ext.window.Window',
	height: 453,width: 353,
	iconCls: 'bogus',
	title: 'Настройка заполнения расшифровки платежа',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:428px;width:353px;height:25px;',
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
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:353px;height:25px;',
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
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:32px;width:337px;height:388px;',
			height: 388,width: 337,
			items:
			[
				{
					title:'Основная',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:60px;width:323px;height:302px;',
			height: 302,width: 323,
			items:
			[
				{
					title:'ПоЗаявкам',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаДляПодбора1',
			style: 'position:absolute;left:129px;top:76px;width:120px;height:19px;',
		},
					]
				},
				{
					title:'ПоДоговорам',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаДляПодбора',
			style: 'position:absolute;left:130px;top:144px;width:120px;height:19px;',
		},
					]
				},
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
			style: 'position:absolute;left:6px;top:31px;width:323px;height:331px;',
			height: 331,width: 323,
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
			style: 'position:absolute;left:6px;top:6px;width:323px;height:24px;',
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