Ext.require(['Данные.Обработки.ПечатьСерийныхНомеров'], function () 
{
	Ext.define('Обработки.ПечатьСерийныхНомеров.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:462px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Обработка  Печать серийных номеров',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			width: 780,
			height: 25,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'Печатать',
				},
				'-',
					]
				},
				'-',
				{
					text:'Печатать',
				},
				'-',
				'-',
				'-',
				{
					text:'Восстановить значения...',
				},
				{
					text:'Сохранить значения...',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			id: 'ТабличноеПолеТовары',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:95px;width:764px;height:361px;',
			height: 361,width: 764,
			columns:
			[
				{
					text:'Номенклатура',
					width:'161',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Качество',
					width:'104',
					dataIndex:'Качество',
					flex:1,
				},
				{
					text:'Характеристика',
					width:'105',
					dataIndex:'Характеристика',
					flex:1,
				},
				{
					text:'Серия',
					width:'138',
					dataIndex:'Серия',
					flex:1,
				},
				{
					text:'Серийный номер',
					width:'145',
					dataIndex:'СерийныйНомер',
					flex:1,
				},
				{
					text:'Количество',
					width:'113',
					dataIndex:'Количество',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПечатьСерийныхНомеров/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'Качество',
					},
					{
						name:'Характеристика',
					},
					{
						name:'Серия',
					},
					{
						name:'СерийныйНомер',
					},
					{
						name:'Количество',
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
						var грид = Ext.getCmp('ТабличноеПолеТовары');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПечатьСерийныхНомеров.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПечатьСерийныхНомеров.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			text: 'Параметры печати',
			style: 'position:absolute;left:8px;top:33px;width:764px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ФорматЭтикетки',
			width: 143,
			height: 19,
			style: 'position:absolute;left:223px;top:57px;width:143px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Формат:',
			style: 'position:absolute;left:118px;top:58px;width:101px;height:16px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ШиринаЭтикетки',
			style: 'position:absolute;left:450px;top:57px;width:21px;height:19px;',
			width: 21,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Ширина (мм):',
			style: 'position:absolute;left:372px;top:57px;width:71px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ВысотаЭтикетки',
			style: 'position:absolute;left:553px;top:57px;width:20px;height:19px;',
			width: 20,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Высота (мм):',
			style: 'position:absolute;left:479px;top:57px;width:68px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Печатать сразу',
			style: 'position:absolute;left:8px;top:57px;width:98px;height:18px;',
		},
		{
			xtype: 'button',
			name: 'КоличествоКопий',
			text: 'Изменить количество',
			style: 'position:absolute;left:576px;top:57px;width:190px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Строки для печати',
			style: 'position:absolute;left:8px;top:79px;width:764px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		],
	}],
	dockedItems:
	[
	]
	});
});