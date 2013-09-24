Ext.require(['Данные.Документы.УстановкаСоответствияСчетовБУиНУ'], function () 
{
	Ext.define('Документы.УстановкаСоответствияСчетовБУиНУ.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:594px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Установка соответствия счетов БУ и НУ',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:245px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 490,
			height: 19,
			style: 'position:absolute;left:96px;top:245px;width:490px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:269px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Ответственный.Представление',
			width: 490,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:96px;top:269px;width:490px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.УстановкаСоответствияСчетовБУиНУ.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.УстановкаСоответствияСчетовБУиНУ.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.УстановкаСоответствияСчетовБУиНУ.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.УстановкаСоответствияСчетовБУиНУ.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:594px;height:25px;',
			width: 594,
			height: 25,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'',
					tooltip:'',
				},
				'-',
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:44px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:132px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:52px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'Дата',
			width: 120,
			height: 19,
			style: 'position:absolute;left:152px;top:33px;width:120px;height:19px;',
		},
		{
			id: 'СоответствиеСчетовБУиНУ',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:81px;width:578px;height:159px;',
			height: 159,width: 578,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Учитывается',
					flex:1,
				},
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Счет БУ',
					width:'78',
					dataIndex:'СчетБУ',
					flex:1,
				},
				{
					text:'Счет корр БУ',
					width:'93',
					dataIndex:'СчетКоррБУ',
					flex:1,
				},
				{
					text:'Вид затрат НУ',
					width:'114',
					dataIndex:'ВидЗатратНУ',
					flex:1,
				},
				{
					text:'Счет НУ',
					width:'85',
					dataIndex:'СчетНУ',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'91',
					dataIndex:'Комментарий',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УстановкаСоответствияСчетовБУиНУ/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Учитывается',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'СчетБУ',
					},
					{
						name:'СчетКоррБУ',
					},
					{
						name:'ВидЗатратНУ',
					},
					{
						name:'СчетНУ',
					},
					{
						name:'Комментарий',
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
						var грид = Ext.getCmp('СоответствиеСчетовБУиНУ');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.УстановкаСоответствияСчетовБУиНУ.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.УстановкаСоответствияСчетовБУиНУ.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:57px;width:578px;height:24px;',
			width: 578,
			height: 24,
			items:
			[
				'-',
				{
					text:'Установить Флажки',
					tooltip:'Установить Флажки',
				},
				{
					text:'Снять Флажки',
					tooltip:'Снять Флажки',
				},
				'-',
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:296px;width:594px;height:25px;',
			width: 594,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Печать',
					tooltip:'',
				},
				'-',
				{
					text:'OK',
					tooltip:'Записать объект и закрыть форму',
					iconCls:'x-WriteAndClose',
				},
				'-',
				{
					text:'Записать',
					tooltip:'Записать объект',
					iconCls:'x-SaveFile',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					iconCls:'x-Close',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});