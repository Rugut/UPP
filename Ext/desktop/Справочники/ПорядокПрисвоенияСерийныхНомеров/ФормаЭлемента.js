Ext.require(['Данные.Справочники.ПорядокПрисвоенияСерийныхНомеров'], function () 
{
	Ext.define('Справочники.ПорядокПрисвоенияСерийныхНомеров.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:600px;height:316px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Порядок присвоения серийных номеров',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
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
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:74px;width:584px;height:24px;',
			width: 584,
			height: 24,
			items:
			[
			]
		},
		{
			id: 'РазрядыСерийногоНомера',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:98px;width:584px;height:137px;',
			height: 137,width: 584,
			columns:
			[
				{
					text:'Номер разряда',
					width:'85',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Источник',
					width:'210',
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
					width:'74',
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
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ПорядокПрисвоенияСерийныхНомеров").data,
					fields: ['Ссылка','НомерСтроки','Источник','Значение','ТипРазряда','РазмерРазряда',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПорядокПрисвоенияСерийныхНомеров/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
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
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('РазрядыСерийногоНомера');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПорядокПрисвоенияСерийныхНомеров.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПорядокПрисвоенияСерийныхНомеров.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:600px;height:25px;',
			width: 600,
			height: 25,
			items:
			[
			]
		},
		{
			xtype: 'label',
			text: 'Разряды серийного номера',
			style: 'position:absolute;left:8px;top:58px;width:584px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
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
			width: 78,
			height: 19,
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:291px;width:600px;height:25px;',
			width: 600,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
					tooltip:'Записать объект и закрыть форму',
				},
				'-',
				{
					text:'Записать',
					tooltip:'Записать объект',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});