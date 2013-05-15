Ext.define('Отчеты.МониторЭффективности.НастройкаСтруктурыОтчета',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:801px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка структуры монитора',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:785px;height:222px;',
			height: 222,width: 785,
			columns:
			[
				{
					text:'Показатель',
					width:'156',
					dataIndex:'Представление',
					flex:1,
				},
				{
					text:'Индикатор динамики',
					width:'62',
					dataIndex:'Тренд',
					flex:1,
				},
				{
					text:'Индикатор состояния',
					width:'60',
					dataIndex:'ИндикаторСостояния',
					flex:1,
				},
				{
					text:'Текущее значение',
					width:'54',
					dataIndex:'ТекущееЗначение',
					flex:1,
				},
				{
					text:'Значение предыдущего периода',
					width:'75',
					dataIndex:'ПредыдущееЗначение',
					flex:1,
				},
				{
					text:'Изменение %',
					width:'66',
					dataIndex:'ИзменениеПроцент',
					flex:1,
				},
				{
					text:'Изменение абс',
					width:'64',
					dataIndex:'ИзменениеАбс',
					flex:1,
				},
				{
					text:'План-факт',
					width:'288',
					dataIndex:'ПланФакт',
					flex:1,
				},
				{
					text:'План',
					width:'35',
					dataIndex:'ЗначениеПлан',
					flex:1,
				},
				{
					text:'% выполнения',
					width:'83',
					dataIndex:'ПроцентВыполнения',
					flex:1,
				},
				{
					text:'Отклонение %',
					width:'81',
					dataIndex:'ОтклонениеПроцент',
					flex:1,
				},
				{
					text:'Отклонение абс',
					width:'88',
					dataIndex:'ОтклонениеАбс',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/МониторЭффективности/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Представление',
					},
					{
						name:'Тренд',
					},
					{
						name:'ИндикаторСостояния',
					},
					{
						name:'ТекущееЗначение',
					},
					{
						name:'ПредыдущееЗначение',
					},
					{
						name:'ИзменениеПроцент',
					},
					{
						name:'ИзменениеАбс',
					},
					{
						name:'ПланФакт',
					},
					{
						name:'ЗначениеПлан',
					},
					{
						name:'ПроцентВыполнения',
					},
					{
						name:'ОтклонениеПроцент',
					},
					{
						name:'ОтклонениеАбс',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'НадписьТекстОписания',
			text: '',
			style: 'position:absolute;left:69px;top:260px;width:723px;height:28px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОписание',
			text: 'Описание:',
			style: 'position:absolute;left:8px;top:260px;width:58px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:296px;width:801px;height:25px;',
			dock: 'bottom',
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
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:8px;width:785px;height:24px;',
			dock: 'top',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'Добавить группу',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'&Изменить',
				},
				{
					text:'&Удалить',
				},
				'-',
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
				'-',
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
				'-',
				{
					text:'Установить флажки',
				},
				{
					text:'Снять флажки',
				},
				'-',
				{
					text:'Подбор',
				},
			]
		},
	]
});