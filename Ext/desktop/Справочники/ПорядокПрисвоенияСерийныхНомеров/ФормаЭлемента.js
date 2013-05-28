Ext.define('Справочники.ПорядокПрисвоенияСерийныхНомеров.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:600px;height:316px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Порядок присвоения серийных номеров',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:487px;top:33px;width:40px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 65,
			height: 19,
			style: 'position:absolute;left:527px;top:33px;width:65px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:79px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 398,
			height: 19,
			style: 'position:absolute;left:89px;top:33px;width:398px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:98px;width:584px;height:137px;',
			height: 137,width: 584,
			columns:
			[
				{
					text:'Номер разряда',
					width:'86',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Источник',
					width:'211',
					dataIndex:'Источник',
					flex:1,
				},
				{
					text:'Значение / свойство',
					width:'114',
					dataIndex:'Значение',
					flex:1,
				},
				{
					text:'Тип разряда',
					width:'75',
					dataIndex:'ТипРазряда',
					flex:1,
				},
				{
					text:'Размер разряда',
					width:'91',
					dataIndex:'РазмерРазряда',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПорядокПрисвоенияСерийныхНомеров/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Источник',
					},
					{
						name:'Значение',
					},
					{
						name:'ТипРазряда',
					},
					{
						name:'РазмерРазряда',
					},
				]
			},
		},
		{
			xtype: 'fieldset',
			title: 'Разряды серийного номера',
			style: 'position:absolute;left:8px;top:58px;width:584px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПримерСерийногоНомера',
			text: 'Пример серийного номера:',
			style: 'position:absolute;left:8px;top:240px;width:143px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПримерСерийногоНомера',
			width: 267,
			height: 19,
			style: 'position:absolute;left:157px;top:240px;width:267px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:264px;width:79px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 503,
			height: 19,
			style: 'position:absolute;left:89px;top:264px;width:503px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоЗнаков',
			text: 'Кол-во знаков:',
			style: 'position:absolute;left:424px;top:240px;width:90px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоличествоЗнаков',
			style: 'position:absolute;left:514px;top:240px;width:78px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:74px;width:584px;height:24px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:600px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:291px;width:600px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
	]
});