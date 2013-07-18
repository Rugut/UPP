Ext.require(['Данные.Документы.УдалитьОтсутствиеНаРаботе'], function () 
{
	Ext.define('Документы.УдалитьОтсутствиеНаРаботе.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:447px;height:298px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отсутствие на работе',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:178px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
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
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:447px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				'-',
				{
					text:'Редактировать номер',
				},
					]
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
					]
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'',
				},
				'-',
					]
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:246px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 343,
			height: 19,
			style: 'position:absolute;left:96px;top:246px;width:343px;height:19px;',
		},
		{
			id: 'Работники',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:97px;width:431px;height:120px;',
			height: 120,width: 431,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Работник',
					width:'168',
					dataIndex:'Сотрудник',
					flex:1,
				},
				{
					text:'Таб. №',
					width:'87',
					dataIndex:'ТабельныйНомерСтрока',
					flex:1,
				},
				{
					text:'Причина отсутствия',
					width:'80',
					dataIndex:'ПричинаОтсутствия',
					flex:1,
				},
				{
					text:'С ...',
					width:'64',
					dataIndex:'ДатаС',
					flex:1,
				},
				{
					text:'По',
					width:'64',
					dataIndex:'ДатаПо',
					flex:1,
				},
				{
					text:'Напомнить',
					width:'128',
					dataIndex:'НапомнитьПоЗавершении',
					flex:1,
				},
				{
					text:'Освобождать ставку',
					width:'128',
					dataIndex:'ОсвобождатьСтавку',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УдалитьОтсутствиеНаРаботе/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Сотрудник',
					},
					{
						name:'ТабельныйНомерСтрока',
					},
					{
						name:'ПричинаОтсутствия',
					},
					{
						name:'ДатаС',
					},
					{
						name:'ДатаПо',
					},
					{
						name:'НапомнитьПоЗавершении',
					},
					{
						name:'ОсвобождатьСтавку',
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
						var грид = Ext.getCmp('Работники');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.УдалитьОтсутствиеНаРаботе.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.УдалитьОтсутствиеНаРаботе.ФормаДокументаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:273px;width:447px;height:25px;',
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
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:222px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Ответственный',
			width: 343,
			height: 19,
			style: 'position:absolute;left:96px;top:222px;width:343px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Работники',
			style: 'position:absolute;left:8px;top:57px;width:431px;height:16px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:73px;width:431px;height:24px;',
			dock: 'top',
			items:
			[
				{
					text:'Заполнить по графику отпусков',
				},
				'-',
				{
					text:'Списком работников',
				},
			]
		},
	]
	});
});