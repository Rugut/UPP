Ext.define('Отчеты.РегистрУчетаОперацийВыбытияИмущества.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	height: 352,width: 372,
	iconCls: 'bogus',
	title: 'Обработка  Регистр учета операций приобретения имущества, работ, услуг, прав',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:327px;width:372px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:8px;width:358px;height:312px;',
			height: 312,width: 358,
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
			style: 'position:absolute;left:84px;top:33px;width:266px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:84px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:184px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:266px;top:6px;width:20px;height:19px;',
		},
					]
				},
				{
					title:'УсловияВыбытия',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:326px;top:6px;width:24px;height:280px;',
			items:
			[
				{
					text:'СнятьВсеУсловия',
				},
				{
					text:'УстановитьВсеУсловия',
				},
			]
		},
					]
				},
				{
					title:'ВидыДоходов',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:326px;top:6px;width:24px;height:280px;',
			items:
			[
				{
					text:'СнятьВсеВиды',
				},
				{
					text:'УстановитьВсеВиды',
				},
			]
		},
					]
				},
			]
		},
	]
});