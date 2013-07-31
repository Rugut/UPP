Ext.require(['Данные.Справочники.СпецификацииНоменклатуры'], function () 
{
	Ext.define('Справочники.СпецификацииНоменклатуры.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:652px;height:444px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Спецификации номенклатуры',
	
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
			style: 'position:absolute;left:426px;top:58px;width:40px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 64,
			height: 19,
			style: 'position:absolute;left:468px;top:58px;width:64px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:58px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 330,
			height: 19,
			style: 'position:absolute;left:94px;top:58px;width:330px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРодитель',
			text: 'Группа:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Родитель.Представление',
			width: 550,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:94px;top:33px;width:550px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СпецификацииНоменклатуры.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпецификацииНоменклатуры.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СпецификацииНоменклатуры.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпецификацииНоменклатуры.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьКодВерсии',
			text: 'Код версии:',
			style: 'position:absolute;left:534px;top:58px;width:68px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КодВерсии',
			width: 40,
			height: 19,
			style: 'position:absolute;left:604px;top:58px;width:40px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Активная спецификация',
			style: 'position:absolute;left:8px;top:82px;width:151px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:392px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 550,
			height: 19,
			style: 'position:absolute;left:94px;top:392px;width:550px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:102px;width:636px;height:285px;',
			height: 285,width: 636,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Полная',
					items:
					[
		{
			xtype: 'label',
			name: 'ГиперссылкаТехнологическаяКартаСпецификацииПланирования',
			text: 'Выбрать технологическую карту',
			style: 'position:absolute;left:86px;top:270px;width:550px;height:15px;text-align:left;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:95px;width:636px;height:169px;',
			height: 169,width: 636,
			items:
			[
				{
					title:'Исходные комплектующие',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСостояние',
			text: 'Состояние:',
			style: 'position:absolute;left:6px;top:6px;width:100px;height:19px;text-align:left;',
		},
		{
			id: 'ИсходныеКомплектующие',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:622px;height:113px;',
			height: 113,width: 622,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'№ операции',
					width:'80',
					dataIndex:'НомерОперацииМаршрута',
					flex:1,
				},
				{
					text:'Позиция',
					width:'48',
					dataIndex:'ПозицияПоСпецификации',
					flex:1,
				},
				{
					text:'Вид норматива',
					width:'120',
					dataIndex:'ВидНорматива',
					flex:1,
				},
				{
					text:'Код',
					width:'60',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Артикул',
					width:'120',
					dataIndex:'Артикул',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'120',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Характеристика',
					width:'120',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Количество',
					width:'64',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Единица',
					width:'54',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'Статья затрат',
					width:'120',
					dataIndex:'СтатьяЗатрат',
					flex:1,
				},
				{
					text:'Мин. партия',
					width:'80',
					dataIndex:'МинимальнаяПартия',
					flex:1,
				},
				{
					text:'Кратность',
					width:'80',
					dataIndex:'Кратность',
					flex:1,
				},
				{
					text:'Вид воспроизводства',
					width:'116',
					dataIndex:'ВидВоспроизводства',
					flex:1,
				},
				{
					text:'Спецификация',
					width:'120',
					dataIndex:'Спецификация',
					flex:1,
				},
				{
					text:'Указание норматива',
					width:'115',
					dataIndex:'УказаниеНорматива',
					flex:1,
				},
				{
					text:'Формула',
					width:'100',
					dataIndex:'Формула',
					flex:1,
				},
				{
					text:'Списание комплектующей',
					width:'109',
					dataIndex:'СписаниеКомплектующей',
					flex:1,
				},
				{
					text:'Свойство',
					width:'105',
					dataIndex:'Свойство',
					flex:1,
				},
				{
					text:'Точка маршрута',
					width:'100',
					dataIndex:'ТочкаМаршрута',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.СпецификацииНоменклатуры").data,
					fields: ['НомерСтроки','НомерОперацииМаршрута','ПозицияПоСпецификации','ВидНорматива','Код','Артикул','Номенклатура','ХарактеристикаНоменклатуры','Количество','ЕдиницаИзмерения','СтатьяЗатрат','МинимальнаяПартия','Кратность','ВидВоспроизводства','Спецификация','УказаниеНорматива','Формула','СписаниеКомплектующей','Свойство','ТочкаМаршрута',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СпецификацииНоменклатуры/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'НомерОперацииМаршрута',
					},
					{
						name:'ПозицияПоСпецификации',
					},
					{
						name:'ВидНорматива',
					},
					{
						name:'Код',
					},
					{
						name:'Артикул',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'ХарактеристикаНоменклатуры',
					},
					{
						name:'Количество',
					},
					{
						name:'ЕдиницаИзмерения',
					},
					{
						name:'СтатьяЗатрат',
					},
					{
						name:'МинимальнаяПартия',
					},
					{
						name:'Кратность',
					},
					{
						name:'ВидВоспроизводства',
					},
					{
						name:'Спецификация',
					},
					{
						name:'УказаниеНорматива',
					},
					{
						name:'Формула',
					},
					{
						name:'СписаниеКомплектующей',
					},
					{
						name:'Свойство',
					},
					{
						name:'ТочкаМаршрута',
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
						var грид = Ext.getCmp('ИсходныеКомплектующие');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.СпецификацииНоменклатуры.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СпецификацииНоменклатуры.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
					]
				},
				{
					title:'Возвратные отходы',
					items:
					[
		{
			id: 'ВозвратныеОтходы',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:622px;height:113px;',
			height: 113,width: 622,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'№ операции',
					width:'80',
					dataIndex:'НомерОперацииМаршрута',
					flex:1,
				},
				{
					text:'Вид норматива',
					width:'120',
					dataIndex:'ВидНорматива',
					flex:1,
				},
				{
					text:'Код',
					width:'60',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Артикул',
					width:'100',
					dataIndex:'Артикул',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'120',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Характеристика',
					width:'120',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Количество',
					width:'64',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Единица',
					width:'54',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'Сумма',
					width:'80',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'Сумма (регл.)',
					width:'80',
					dataIndex:'СуммаРегл',
					flex:1,
				},
				{
					text:'Статья затрат',
					width:'120',
					dataIndex:'СтатьяЗатрат',
					flex:1,
				},
				{
					text:'Указание норматива',
					width:'115',
					dataIndex:'УказаниеНорматива',
					flex:1,
				},
				{
					text:'Формула',
					width:'100',
					dataIndex:'Формула',
					flex:1,
				},
				{
					text:'Отражение возвр. отхода',
					width:'109',
					dataIndex:'СписаниеКомплектующей',
					flex:1,
				},
				{
					text:'Свойство',
					width:'105',
					dataIndex:'Свойство',
					flex:1,
				},
				{
					text:'Точка маршрута',
					width:'100',
					dataIndex:'ТочкаМаршрута',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.СпецификацииНоменклатуры").data,
					fields: ['НомерСтроки','НомерОперацииМаршрута','ВидНорматива','Код','Артикул','Номенклатура','ХарактеристикаНоменклатуры','Количество','ЕдиницаИзмерения','Сумма','СуммаРегл','СтатьяЗатрат','УказаниеНорматива','Формула','СписаниеКомплектующей','Свойство','ТочкаМаршрута',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СпецификацииНоменклатуры/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'НомерОперацииМаршрута',
					},
					{
						name:'ВидНорматива',
					},
					{
						name:'Код',
					},
					{
						name:'Артикул',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'ХарактеристикаНоменклатуры',
					},
					{
						name:'Количество',
					},
					{
						name:'ЕдиницаИзмерения',
					},
					{
						name:'Сумма',
					},
					{
						name:'СуммаРегл',
					},
					{
						name:'СтатьяЗатрат',
					},
					{
						name:'УказаниеНорматива',
					},
					{
						name:'Формула',
					},
					{
						name:'СписаниеКомплектующей',
					},
					{
						name:'Свойство',
					},
					{
						name:'ТочкаМаршрута',
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
						var грид = Ext.getCmp('ВозвратныеОтходы');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.СпецификацииНоменклатуры.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СпецификацииНоменклатуры.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
					]
				},
				{
					title:'Параметры выпуска продукции',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьДатаУтверждения',
			text: 'Дата утверждения:',
			style: 'position:absolute;left:6px;top:30px;width:100px;height:19px;text-align:left;',
		},
		{
			id: 'ПараметрыВыпускаПродукции',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:622px;height:113px;',
			height: 113,width: 622,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Вид параметра',
					width:'275',
					dataIndex:'ВидПараметра',
					flex:1,
				},
				{
					text:'Значение по умолчанию',
					width:'130',
					dataIndex:'Значение',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.СпецификацииНоменклатуры").data,
					fields: ['НомерСтроки','ВидПараметра','Значение',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СпецификацииНоменклатуры/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ВидПараметра',
					},
					{
						name:'Значение',
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
						var грид = Ext.getCmp('ПараметрыВыпускаПродукции');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.СпецификацииНоменклатуры.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СпецификацииНоменклатуры.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
					]
				},
				{
					title:'Документация',
					items:
					[
		{
			id: 'Документация',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:622px;height:113px;',
			height: 113,width: 622,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Обозначение',
					width:'100',
					dataIndex:'Обозначение',
					flex:1,
				},
				{
					text:'Наименование',
					width:'342',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.СпецификацииНоменклатуры").data,
					fields: ['НомерСтроки','Обозначение','Наименование',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СпецификацииНоменклатуры/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Обозначение',
					},
					{
						name:'Наименование',
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
						var грид = Ext.getCmp('Документация');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.СпецификацииНоменклатуры.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СпецификацииНоменклатуры.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
					]
				},
				{
					title:'Дополнительно',
					items:
					[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'Состояние.Представление',
			width: 80,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:108px;top:6px;width:80px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СпецификацииНоменклатуры.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпецификацииНоменклатуры.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СпецификацииНоменклатуры.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпецификацииНоменклатуры.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаУтверждения',
			width: 80,
			height: 19,
			style: 'position:absolute;left:108px;top:30px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:6px;top:54px;width:100px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Ответственный.Представление',
			width: 198,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:108px;top:54px;width:198px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СпецификацииНоменклатуры.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпецификацииНоменклатуры.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СпецификацииНоменклатуры.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпецификацииНоменклатуры.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьНазначение',
			text: 'Назначение:',
			style: 'position:absolute;left:6px;top:78px;width:100px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ГруппаДоступа.Представление',
			width: 198,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:108px;top:78px;width:198px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СпецификацииНоменклатуры.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпецификацииНоменклатуры.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СпецификацииНоменклатуры.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпецификацииНоменклатуры.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:636px;height:89px;',
			height: 89,width: 636,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Сборочная',
					items:
					[
		{
			xtype: 'fieldset',
			title: 'Выходное изделие',
			style: 'position:absolute;left:0px;top:1px;width:636px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНоменклатура',
			text: 'Номенклатура:',
			style: 'position:absolute;left:6px;top:22px;width:78px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Номенклатура.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:86px;top:22px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СпецификацииНоменклатуры.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпецификацииНоменклатуры.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СпецификацииНоменклатуры.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпецификацииНоменклатуры.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьХарактеристикаНоменклатуры',
			text: 'Характеристика:',
			style: 'position:absolute;left:326px;top:22px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ХарактеристикаНоменклатуры.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:416px;top:22px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СпецификацииНоменклатуры.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпецификацииНоменклатуры.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СпецификацииНоменклатуры.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпецификацииНоменклатуры.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Количество',
			style: 'position:absolute;left:86px;top:46px;width:80px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ЕдиницаИзмерения.Представление',
			width: 80,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:226px;top:46px;width:80px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СпецификацииНоменклатуры.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпецификацииНоменклатуры.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СпецификацииНоменклатуры.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпецификацииНоменклатуры.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерОперацииМаршрута',
			width: 80,
			height: 19,
			style: 'position:absolute;left:86px;top:70px;width:80px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ТочкаМаршрута.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:416px;top:46px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СпецификацииНоменклатуры.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпецификацииНоменклатуры.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СпецификацииНоменклатуры.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпецификацииНоменклатуры.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьТочкаМаршрута',
			text: 'Точка маршрута:',
			style: 'position:absolute;left:326px;top:46px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Кратность',
			style: 'position:absolute;left:226px;top:70px;width:80px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'МинимальнаяПартия',
			style: 'position:absolute;left:416px;top:70px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМинимальнаяПартияИзделия',
			text: 'Кратность:',
			style: 'position:absolute;left:168px;top:70px;width:56px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМинимальнаяПартия',
			text: 'Мин. партия:',
			style: 'position:absolute;left:326px;top:70px;width:88px;height:19px;text-align:left;',
		},
					]
				},
				{
					title:'Полная',
					items:
					[
		{
			id: 'ВыходныеИзделия',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:40px;width:636px;height:48px;',
			height: 48,width: 636,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'№ операции',
					width:'80',
					dataIndex:'НомерОперацииМаршрута',
					flex:1,
				},
				{
					text:'Код',
					width:'60',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Артикул',
					width:'120',
					dataIndex:'Артикул',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'120',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Характеристика',
					width:'120',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Количество',
					width:'64',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Единица',
					width:'54',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'Мин. партия',
					width:'80',
					dataIndex:'МинимальнаяПартия',
					flex:1,
				},
				{
					text:'Кратность',
					width:'80',
					dataIndex:'Кратность',
					flex:1,
				},
				{
					text:'Доля стоим.',
					width:'80',
					dataIndex:'ДоляСтоимости',
					flex:1,
				},
				{
					text:'Точка маршрута',
					width:'100',
					dataIndex:'ТочкаМаршрута',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.СпецификацииНоменклатуры").data,
					fields: ['НомерСтроки','НомерОперацииМаршрута','Код','Артикул','Номенклатура','ХарактеристикаНоменклатуры','Количество','ЕдиницаИзмерения','МинимальнаяПартия','Кратность','ДоляСтоимости','ТочкаМаршрута',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СпецификацииНоменклатуры/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'НомерОперацииМаршрута',
					},
					{
						name:'Код',
					},
					{
						name:'Артикул',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'ХарактеристикаНоменклатуры',
					},
					{
						name:'Количество',
					},
					{
						name:'ЕдиницаИзмерения',
					},
					{
						name:'МинимальнаяПартия',
					},
					{
						name:'Кратность',
					},
					{
						name:'ДоляСтоимости',
					},
					{
						name:'ТочкаМаршрута',
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
						var грид = Ext.getCmp('ВыходныеИзделия');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.СпецификацииНоменклатуры.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СпецификацииНоменклатуры.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'fieldset',
			title: 'Выходные изделия',
			style: 'position:absolute;left:0px;top:0px;width:636px;height:16px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьТехКарта',
			text: 'Тех. карта:',
			style: 'position:absolute;left:0px;top:270px;width:84px;height:15px;text-align:left;',
		},
					]
				},
				{
					title:'Узел',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:636px;height:285px;',
			height: 285,width: 636,
			items:
			[
				{
					title:'Исходные комплектующие',
					items:
					[
		{
			id: 'ИсходныеКомплектующиеУзел',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:622px;height:228px;',
			height: 228,width: 622,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Позиция',
					width:'48',
					dataIndex:'ПозицияПоСпецификации',
					flex:1,
				},
				{
					text:'Вид норматива',
					width:'120',
					dataIndex:'ВидНорматива',
					flex:1,
				},
				{
					text:'Код',
					width:'60',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Артикул',
					width:'120',
					dataIndex:'Артикул',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'120',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Характеристика',
					width:'120',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Количество',
					width:'64',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Единица',
					width:'54',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'Статья затрат',
					width:'120',
					dataIndex:'СтатьяЗатрат',
					flex:1,
				},
				{
					text:'Мин. партия',
					width:'80',
					dataIndex:'МинимальнаяПартияИзделий',
					flex:1,
				},
				{
					text:'Вид воспроизводства',
					width:'116',
					dataIndex:'ВидВоспроизводства',
					flex:1,
				},
				{
					text:'Спецификация',
					width:'120',
					dataIndex:'Спецификация',
					flex:1,
				},
				{
					text:'Указание норматива',
					width:'115',
					dataIndex:'УказаниеНорматива',
					flex:1,
				},
				{
					text:'Формула',
					width:'100',
					dataIndex:'Формула',
					flex:1,
				},
				{
					text:'Списание комплектующей',
					width:'109',
					dataIndex:'СписаниеКомплектующей',
					flex:1,
				},
				{
					text:'Свойство',
					width:'105',
					dataIndex:'Свойство',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.СпецификацииНоменклатуры").data,
					fields: ['НомерСтроки','ПозицияПоСпецификации','ВидНорматива','Код','Артикул','Номенклатура','ХарактеристикаНоменклатуры','Количество','ЕдиницаИзмерения','СтатьяЗатрат','МинимальнаяПартияИзделий','ВидВоспроизводства','Спецификация','УказаниеНорматива','Формула','СписаниеКомплектующей','Свойство',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СпецификацииНоменклатуры/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ПозицияПоСпецификации',
					},
					{
						name:'ВидНорматива',
					},
					{
						name:'Код',
					},
					{
						name:'Артикул',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'ХарактеристикаНоменклатуры',
					},
					{
						name:'Количество',
					},
					{
						name:'ЕдиницаИзмерения',
					},
					{
						name:'СтатьяЗатрат',
					},
					{
						name:'МинимальнаяПартияИзделий',
					},
					{
						name:'ВидВоспроизводства',
					},
					{
						name:'Спецификация',
					},
					{
						name:'УказаниеНорматива',
					},
					{
						name:'Формула',
					},
					{
						name:'СписаниеКомплектующей',
					},
					{
						name:'Свойство',
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
						var грид = Ext.getCmp('ИсходныеКомплектующиеУзел');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.СпецификацииНоменклатуры.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СпецификацииНоменклатуры.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
					]
				},
				{
					title:'Дополнительно',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСостояниеУзел',
			text: 'Состояние:',
			style: 'position:absolute;left:6px;top:6px;width:100px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'СостояниеУзел.Представление',
			width: 80,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:108px;top:6px;width:80px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СпецификацииНоменклатуры.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпецификацииНоменклатуры.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СпецификацииНоменклатуры.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпецификацииНоменклатуры.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьДатаУтвержденияУзел',
			text: 'Дата утверждения:',
			style: 'position:absolute;left:6px;top:30px;width:100px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаУтвержденияУзел',
			width: 80,
			height: 19,
			style: 'position:absolute;left:108px;top:30px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственныйУзел',
			text: 'Ответственный:',
			style: 'position:absolute;left:6px;top:54px;width:100px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ОтветственныйУзел.Представление',
			width: 198,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:108px;top:54px;width:198px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СпецификацииНоменклатуры.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпецификацииНоменклатуры.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СпецификацииНоменклатуры.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпецификацииНоменклатуры.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьНазначение1',
			text: 'Назначение:',
			style: 'position:absolute;left:6px;top:78px;width:100px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ГруппаДоступаУзел.Представление',
			width: 198,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:108px;top:78px;width:198px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СпецификацииНоменклатуры.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпецификацииНоменклатуры.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СпецификацииНоменклатуры.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпецификацииНоменклатуры.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
					]
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'ТекстОсновнаяСпецификация',
			text: 'ТекстОсновнаяСпецификация',
			style: 'position:absolute;left:164px;top:82px;width:480px;height:15px;text-align:right;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:652px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Установить основной спецификацией на дату...',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:419px;width:652px;height:25px;',
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
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});