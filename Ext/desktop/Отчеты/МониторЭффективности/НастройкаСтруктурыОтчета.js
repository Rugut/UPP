Ext.require(['Данные.Отчеты.МониторЭффективности'], function () 
{
	Ext.define('Отчеты.МониторЭффективности.НастройкаСтруктурыОтчета',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:801px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Настройка структуры монитора',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'ПоказателиКопия',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:785px;height:222px;',
			height: 222,width: 785,
			columns:
			[
				{
					text:'Показатель',
					width:'155',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/МониторЭффективности/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
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
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('ПоказателиКопия');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.МониторЭффективности.НастройкаСтруктурыОтчетаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.МониторЭффективности.НастройкаСтруктурыОтчетаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:8px;width:785px;height:24px;',
			width: 785,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
					tooltip:'Добавить',
					iconCls:'x-add',
				},
				{
					text:'Добавить группу',
					tooltip:'Добавить группу показателей',
				},
				{
					text:'&Скопировать',
					tooltip:'',
				},
				{
					text:'&Изменить',
					tooltip:'Изменить текущий элемент',
					iconCls:'x-Change',
				},
				{
					text:'&Удалить',
					tooltip:'Удалить текущий',
				},
				'-',
				{
					text:'&Переместить вверх',
					tooltip:'',
				},
				{
					text:'&Переместить вниз',
					tooltip:'',
				},
				'-',
				{
					text:'Сортировать по возрастанию',
					tooltip:'Открыть конструктор настроек',
				},
				{
					text:'Сортировать по убыванию',
					tooltip:'',
				},
				'-',
				{
					text:'Установить флажки',
					tooltip:'Установить флажки в текущей колонке',
				},
				{
					text:'Снять флажки',
					tooltip:'Снять флажки в текущей колонке',
				},
				'-',
				{
					text:'Подбор',
					tooltip:'Подбор показателей',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьТекстОписания',
			text: 'НадписьТекстОписания',
			style: 'position:absolute;left:69px;top:260px;width:723px;height:28px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОписание',
			text: 'Описание:',
			style: 'position:absolute;left:8px;top:260px;width:58px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:296px;width:801px;height:25px;',
			width: 801,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
					tooltip:'ОК',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					handler: function () {this.up('window').close();},
				},
				'-',
				{
					text:'Справка',
					tooltip:'Открыть справку',
				},
			]
		},
	]
	});
});