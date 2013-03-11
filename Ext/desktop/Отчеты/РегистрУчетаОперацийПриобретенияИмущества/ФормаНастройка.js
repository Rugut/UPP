Ext.define('Отчеты.РегистрУчетаОперацийПриобретенияИмущества.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	height: 328,width: 372,
	iconCls: 'bogus',
	title: 'Обработка  Регистр учета операций приобретения имущества, работ, услуг, прав',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:303px;width:372px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:8px;width:358px;height:288px;',
			height: 288,width: 358,
			items:
			[
				{
					title:'Общие',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:41px;width:219px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:94px;top:14px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:207px;top:14px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:294px;top:14px;width:19px;height:19px;',
		},
					]
				},
				{
					title:'УсловияПолучения',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:326px;top:6px;width:24px;height:256px;',
			items:
			[
				{
					text:'УстановитьВсеУсловия',
				},
				{
					text:'СнятьВсеУсловия',
				},
			]
		},
					]
				},
				{
					title:'ВидыРасходов',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:326px;top:6px;width:24px;height:256px;',
			items:
			[
				{
					text:'УстановтьВсеВиды',
				},
				{
					text:'СнятьВсеВиды',
				},
			]
		},
					]
				},
			]
		},
	]
});