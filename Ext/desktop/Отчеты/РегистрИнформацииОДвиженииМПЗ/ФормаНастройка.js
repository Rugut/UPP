Ext.define('Отчеты.РегистрИнформацииОДвиженииМПЗ.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:490px;height:192px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:167px;width:490px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:474px;height:147px;',
			height: 147,width: 474,
			items:
			[
				{
					title:'Общие',
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:84px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Вид МПЗ:',
			style: 'position:absolute;left:6px;top:57px;width:77px;height:19px;text-align:left;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Регистр информации по МПЗ на складе',
			style: 'position:absolute;left:6px;top:81px;width:248px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Регистр информации по МПЗ отгруженным',
			style: 'position:absolute;left:6px;top:98px;width:246px;height:18px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:6px;top:32px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:84px;top:32px;width:219px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНач',
			text: 'Период с:',
			style: 'position:absolute;left:6px;top:6px;width:57px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:84px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаКон',
			text: 'по:',
			style: 'position:absolute;left:186px;top:6px;width:20px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:217px;top:6px;width:85px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:310px;top:6px;width:19px;height:19px;',
		},
					]
				},
				{
					title:'Отбор',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:34px;width:460px;height:87px;',
			height: 87,width: 460,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Поле',
					width:'100',
				},
				{
					text:'Тип сравнения',
					width:'60',
				},
				{
					text:'Значение',
					width:'100',
				},
				{
					text:'С',
					width:'100',
				},
				{
					text:'По',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:10px;top:6px;width:456px;height:24px;',
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