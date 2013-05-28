Ext.define('Обработки.АнализНеявок.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:619px;height:413px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Анализ неявок',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:118px;width:603px;height:214px;',
			height: 214,width: 603,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'',
					width:'20',
					dataIndex:'Отметка',
					flex:1,
				},
				{
					text:'Сотрудник',
					width:'120',
					dataIndex:'Сотрудник',
					flex:1,
				},
				{
					text:'Дата начала',
					width:'80',
					dataIndex:'ДатаНачала',
					flex:1,
				},
				{
					text:'Дата окончания',
					width:'87',
					dataIndex:'ДатаОкончания',
					flex:1,
				},
				{
					text:'Неявка',
					width:'95',
					dataIndex:'Неявка',
					flex:1,
				},
				{
					text:'Кадровый документ',
					width:'105',
					dataIndex:'КадровыйДокумент',
					flex:1,
				},
				{
					text:'Расчетный документ',
					width:'100',
					dataIndex:'РасчетныйДокумент',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/АнализНеявок/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Отметка',
					},
					{
						name:'Сотрудник',
					},
					{
						name:'ДатаНачала',
					},
					{
						name:'ДатаОкончания',
					},
					{
						name:'Неявка',
					},
					{
						name:'КадровыйДокумент',
					},
					{
						name:'РасчетныйДокумент',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:6px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация',
			width: 202,
			height: 19,
			style: 'position:absolute;left:99px;top:6px;width:202px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделениеОрганизации',
			text: 'Подразделение:',
			style: 'position:absolute;left:304px;top:6px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ПодразделениеОрганизации',
			width: 220,
			height: 19,
			style: 'position:absolute;left:391px;top:6px;width:220px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНачала',
			width: 80,
			height: 19,
			style: 'position:absolute;left:99px;top:30px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'по:',
			style: 'position:absolute;left:182px;top:30px;width:15px;height:19px;text-align:center;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаОкончания',
			width: 80,
			height: 19,
			style: 'position:absolute;left:198px;top:30px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:281px;top:30px;width:20px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Неявки',
			style: 'position:absolute;left:8px;top:78px;width:603px;height:16px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:388px;width:619px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КадровыйДокумент',
			width: 307,
			height: 19,
			style: 'position:absolute;left:304px;top:54px;width:307px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ТипДокумента',
			width: 202,
			height: 19,
			style: 'position:absolute;left:99px;top:54px;width:202px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц',
			text: 'Месяц начисления:',
			style: 'position:absolute;left:8px;top:361px;width:100px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПериодРегистрации',
			width: 133,
			height: 19,
			style: 'position:absolute;left:110px;top:361px;width:133px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Формирование расчетных документов',
			style: 'position:absolute;left:8px;top:339px;width:603px;height:16px;',
		},
		{
			xtype: 'button',
			name: 'Создать',
			text: 'Создать документы',
			style: 'position:absolute;left:252px;top:361px;width:120px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Рассчитать',
			text: 'Рассчитать',
			style: 'position:absolute;left:379px;top:361px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Провести',
			text: 'Провести',
			style: 'position:absolute;left:466px;top:361px;width:80px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'За период с:',
			style: 'position:absolute;left:8px;top:30px;width:90px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'По документу:',
			style: 'position:absolute;left:8px;top:54px;width:90px;height:19px;',
		},
			]
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:94px;width:603px;height:24px;',
			dock: 'top',
			items:
			[
				{
					text:'Состояния сотрудников',
				},
			]
		},
	]
});