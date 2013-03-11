Ext.define('Отчеты.МониторЭффективности.КонструкторНастройкиПоказателя',
	{
	extend: 'Ext.window.Window',
	height: 366,width: 446,
	iconCls: 'bogus',
	title: 'Настройка показателя монитора эффективности',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:341px;width:446px;height:25px;',
			items:
			[
				{
					text:'Далее',
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
					text:'Назад',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:54px;width:430px;height:279px;',
			height: 279,width: 430,
			items:
			[
				{
					title:'НастройкаВыборВидаПоказателя',
					items:
					[
					]
				},
				{
					title:'НастройкаФакт',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачалоТекущегоПериода',
			style: 'position:absolute;left:129px;top:123px;width:279px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТекущееЗначение',
			style: 'position:absolute;left:129px;top:99px;width:279px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонецТекущегоПериода',
			style: 'position:absolute;left:129px;top:147px;width:279px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачалоПредыдущегоПериода',
			style: 'position:absolute;left:129px;top:228px;width:279px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредыдущееЗначение',
			style: 'position:absolute;left:129px;top:204px;width:279px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонецПредыдущегоПериода',
			style: 'position:absolute;left:129px;top:252px;width:279px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаборДанныхЗначениеПоказателя',
			style: 'position:absolute;left:129px;top:48px;width:279px;height:19px;',
		},
					]
				},
				{
					title:'НастройкаФактПрогноз',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачалоТекущегоПериода1',
			style: 'position:absolute;left:129px;top:102px;width:279px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТекущееЗначение1',
			style: 'position:absolute;left:129px;top:78px;width:279px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонецТекущегоПериода1',
			style: 'position:absolute;left:129px;top:126px;width:279px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаборДанныхЗначениеПоказателяПрогноз',
			style: 'position:absolute;left:129px;top:48px;width:279px;height:19px;',
		},
					]
				},
				{
					title:'НастройкаПлан',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачалоПериодаПлан',
			style: 'position:absolute;left:129px;top:102px;width:279px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонецПериодаПлан',
			style: 'position:absolute;left:129px;top:126px;width:279px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеПлан',
			style: 'position:absolute;left:129px;top:78px;width:279px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаборДанныхЗначениеПлан',
			style: 'position:absolute;left:129px;top:48px;width:279px;height:19px;',
		},
					]
				},
			]
		},
	]
});