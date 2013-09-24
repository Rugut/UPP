Ext.require(['Данные.Обработки.ОбменДаннымиСЮнискан'], function () 
{
	Ext.define('Обработки.ОбменДаннымиСЮнискан.СинхронизацияНоменклатуры',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:640px;height:430px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Информация о зарегистрированной номенклатуре (ЮНИСКАН/GS1 Russia)',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:8px;width:624px;height:24px;',
			width: 624,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
					tooltip:'Добавить',
					iconCls:'x-copy',
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
					text:'Обновить',
					tooltip:'Обновить данные о номенклатуре из информационной базы',
				},
			]
		},
		{
			id: 'ТаблицаШтрихкодов',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:37px;width:624px;height:185px;',
			height: 185,width: 624,
			columns:
			[
				{
					text:'Штрихкод',
					width:'100',
					dataIndex:'ШтрихКод',
					flex:1,
				},
				{
					text:'Статус',
					width:'150',
					dataIndex:'Регистрация',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'120',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Единица измерения',
					width:'100',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'120',
					dataIndex:'ОписаниеОшибки',
					flex:1,
				},
				{
					text:'НаименованиеЮнискан',
					width:'100',
					dataIndex:'НаименованиеЮнискан',
					flex:1,
				},
				{
					text:'ЕдиницаИзмеренияЮнискан',
					width:'100',
					dataIndex:'ЕдиницаИзмеренияЮнискан',
					flex:1,
				},
				{
					text:'НаименованиеЕдиницыИзмеренияЮнискан',
					width:'100',
					dataIndex:'НаименованиеЕдиницыИзмеренияЮнискан',
					flex:1,
				},
				{
					text:'КоэффициентЮнискан',
					width:'100',
					dataIndex:'КоэффициентЮнискан',
					flex:1,
				},
				{
					text:'ПроизводительЮнискан',
					width:'100',
					dataIndex:'ПроизводительЮнискан',
					flex:1,
				},
				{
					text:'НаименованиеИБ',
					width:'100',
					dataIndex:'НаименованиеИБ',
					flex:1,
				},
				{
					text:'ЕдиницаИзмеренияИБ',
					width:'103',
					dataIndex:'ЕдиницаИзмеренияИБ',
					flex:1,
				},
				{
					text:'НаименованеиЕдиницыИзмеренияИБ',
					width:'100',
					dataIndex:'НаименованеиЕдиницыИзмеренияИБ',
					flex:1,
				},
				{
					text:'КоэффициентИБ',
					width:'100',
					dataIndex:'КоэффициентИБ',
					flex:1,
				},
				{
					text:'ПроизводительИБ',
					width:'100',
					dataIndex:'ПроизводительИБ',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОбменДаннымиСЮнискан/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ШтрихКод',
					},
					{
						name:'Регистрация',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'ЕдиницаИзмерения',
					},
					{
						name:'ОписаниеОшибки',
					},
					{
						name:'НаименованиеЮнискан',
					},
					{
						name:'ЕдиницаИзмеренияЮнискан',
					},
					{
						name:'НаименованиеЕдиницыИзмеренияЮнискан',
					},
					{
						name:'КоэффициентЮнискан',
					},
					{
						name:'ПроизводительЮнискан',
					},
					{
						name:'НаименованиеИБ',
					},
					{
						name:'ЕдиницаИзмеренияИБ',
					},
					{
						name:'НаименованеиЕдиницыИзмеренияИБ',
					},
					{
						name:'КоэффициентИБ',
					},
					{
						name:'ПроизводительИБ',
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
						var грид = Ext.getCmp('ТаблицаШтрихкодов');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ОбменДаннымиСЮнискан.СинхронизацияНоменклатурыСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ОбменДаннымиСЮнискан.СинхронизацияНоменклатурыСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПроизводитель',
			text: 'Производитель:',
			style: 'position:absolute;left:8px;top:249px;width:624px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеИБ',
			text: 'Наименование (ИБ):',
			style: 'position:absolute;left:8px;top:271px;width:624px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеЮнискан',
			text: 'Наименование (Юнискан):',
			style: 'position:absolute;left:8px;top:293px;width:624px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЕдиницаИзмеренияИБ',
			text: 'Ед. измерения (ИБ):',
			style: 'position:absolute;left:8px;top:314px;width:624px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЕдиницаИзмеренияЮнискан',
			text: 'Ед. измерения (Юнискан):',
			style: 'position:absolute;left:8px;top:336px;width:290px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоэффициентИБ',
			text: 'Коэффициент (ИБ):',
			style: 'position:absolute;left:8px;top:358px;width:290px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоэффициентЮнискан',
			text: 'Коэффициент (Юнискан):',
			style: 'position:absolute;left:8px;top:380px;width:290px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПараметрыОбменаСЮнискан',
			text: 'Параметры обмена с БД ЮНИСКАН/GS1 Russia',
			style: 'position:absolute;left:8px;top:227px;width:624px;height:17px;',
		},
		{
			xtype: 'button',
			name: 'СоздатьНоменклатуру',
			text: 'Создать номенклатуру',
			style: 'position:absolute;left:304px;top:358px;width:155px;height:17px;',
		},
		{
			xtype: 'button',
			name: 'ОбновитьНоменклатуру',
			text: 'Обновить номенклатуру',
			style: 'position:absolute;left:304px;top:380px;width:155px;height:17px;',
		},
		{
			xtype: 'button',
			name: 'СоздатьЕдиницуИзмерения',
			text: 'Создать единицу измерения',
			style: 'position:absolute;left:464px;top:358px;width:168px;height:17px;',
		},
		{
			xtype: 'button',
			name: 'ОбновитьЕдиницуИзмерения',
			text: 'Обновить единицу измерения',
			style: 'position:absolute;left:464px;top:380px;width:168px;height:17px;',
		},
		{
			xtype: 'button',
			name: 'ПодборНоменклатуры',
			text: 'Подобрать номенклатуру',
			style: 'position:absolute;left:304px;top:336px;width:155px;height:17px;',
		},
		{
			xtype: 'button',
			name: 'ПодборЕдиницыИзмерения',
			text: 'Подобрать единицу измерения',
			style: 'position:absolute;left:464px;top:336px;width:168px;height:17px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:405px;width:640px;height:25px;',
			width: 640,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Запрос',
					tooltip:'Запрос данных о зарегистрированной номенклатуре',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					iconCls:'x-Close',
					handler: function () {this.up('window').close();},
				},
				'-',
				{
					text:'Действие1',
					tooltip:'Открыть справку',
				},
			]
		},
	]
	});
});