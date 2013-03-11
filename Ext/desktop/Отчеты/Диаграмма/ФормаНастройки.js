Ext.define('Отчеты.Диаграмма.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	height: 282,width: 487,
	iconCls: 'bogus',
	title: 'Настройки диаграммы',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:257px;width:487px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоОграничения',
			style: 'position:absolute;left:372px;top:54px;width:60px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:122px;width:471px;height:127px;',
			height: 127,width: 471,
			items:
			[
				{
					title:'Круговая',
					items:
					[
					]
				},
				{
					title:'КруговаяОбъемная',
					items:
					[
					]
				},
				{
					title:'ГистограммаПлоская',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БазовоеЗначение',
			style: 'position:absolute;left:136px;top:24px;width:60px;height:19px;',
		},
					]
				},
				{
					title:'ГистограммаОбъемная',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БазовоеЗначение1',
			style: 'position:absolute;left:136px;top:24px;width:60px;height:19px;',
		},
					]
				},
				{
					title:'Изометрическая',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БазовоеЗначение2',
			style: 'position:absolute;left:136px;top:48px;width:58px;height:19px;',
		},
					]
				},
				{
					title:'График',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БазовоеЗначение3',
			style: 'position:absolute;left:136px;top:0px;width:60px;height:19px;',
		},
					]
				},
				{
					title:'ГрафикСЗаливкой',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БазовоеЗначение4',
			style: 'position:absolute;left:136px;top:0px;width:60px;height:19px;',
		},
					]
				},
			]
		},
	]
});