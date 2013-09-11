Ext.require(['Данные.Документы.СведенияОТрудовомСтажеИЗаработкеСЗВ4'], function () 
{
	Ext.define('Документы.СведенияОТрудовомСтажеИЗаработкеСЗВ4.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:1000px;height:520px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Сведения о страховых взносах и стаже застрахованных лиц (СЗВ-4, СЗВ-6)',
	
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
			style: 'position:absolute;left:465px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:553px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:633px;top:33px;width:20px;height:19px;text-align:center;',
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
			style: 'position:absolute;left:653px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:33px;width:93px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация.Представление',
			width: 318,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:102px;top:33px;width:318px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.СведенияОТрудовомСтажеИЗаработкеСЗВ4.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.СведенияОТрудовомСтажеИЗаработкеСЗВ4.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.СведенияОТрудовомСтажеИЗаработкеСЗВ4.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.СведенияОТрудовомСтажеИЗаработкеСЗВ4.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:465px;top:57px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Исполнитель.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:553px;top:57px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.СведенияОТрудовомСтажеИЗаработкеСЗВ4.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.СведенияОТрудовомСтажеИЗаработкеСЗВ4.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.СведенияОТрудовомСтажеИЗаработкеСЗВ4.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.СведенияОТрудовомСтажеИЗаработкеСЗВ4.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:468px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 778,
			height: 19,
			style: 'position:absolute;left:97px;top:468px;width:778px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:262px;width:984px;height:24px;',
			width: 984,
			height: 24,
			items:
			[
				{
					text:'Все адреса',
					tooltip:'Заполнить все адреса для информирования',
				},
				{
					text:'Изменившиеся адреса',
					tooltip:'Заполнить только изменившиеся адреса для информирования',
				},
				'-',
				{
					text:'Суммы взносов',
					tooltip:'Заполнить начисленные и уплаченные суммы взносов',
				},
			]
		},
		{
			id: 'РаботникиОрганизации',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:286px;width:984px;height:175px;',
			height: 175,width: 984,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Сотрудник',
					width:'220',
					dataIndex:'ФизЛицо',
					flex:1,
				},
				{
					text:'Адрес для информирования',
					width:'120',
					dataIndex:'АдресДляИнформирования',
					flex:1,
				},
				{
					text:'Страховой номер',
					width:'120',
					dataIndex:'СтраховойНомерПФР',
					flex:1,
				},
				{
					text:'Фамилия',
					width:'80',
					dataIndex:'Фамилия',
					flex:1,
				},
				{
					text:'Имя',
					width:'80',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Отчество',
					width:'80',
					dataIndex:'Отчество',
					flex:1,
				},
				{
					text:'Страховая часть',
					width:'260',
					dataIndex:'КолонкаСтраховая',
					flex:1,
				},
				{
					text:'Начислено',
					width:'80',
					dataIndex:'НачисленоСтраховая',
					flex:1,
				},
				{
					text:'В т.ч доначислено',
					width:'100',
					dataIndex:'ДоначисленоСтраховая',
					flex:1,
				},
				{
					text:'Уплачено',
					width:'80',
					dataIndex:'УплаченоСтраховая',
					flex:1,
				},
				{
					text:'В т.ч доуплачено',
					width:'100',
					dataIndex:'ДоУплаченоСтраховая',
					flex:1,
				},
				{
					text:'Накопительная часть',
					width:'260',
					dataIndex:'КолонкаНакопительная',
					flex:1,
				},
				{
					text:'Начислено',
					width:'80',
					dataIndex:'НачисленоНакопительная',
					flex:1,
				},
				{
					text:'В т.ч доначислено',
					width:'100',
					dataIndex:'ДоначисленоНакопительная',
					flex:1,
				},
				{
					text:'Уплачено',
					width:'80',
					dataIndex:'УплаченоНакопительная',
					flex:1,
				},
				{
					text:'В т.ч доуплачено',
					width:'100',
					dataIndex:'ДоУплаченоНакопительная',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СведенияОТрудовомСтажеИЗаработкеСЗВ4/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ФизЛицо',
					},
					{
						name:'АдресДляИнформирования',
					},
					{
						name:'СтраховойНомерПФР',
					},
					{
						name:'Фамилия',
					},
					{
						name:'Имя',
					},
					{
						name:'Отчество',
					},
					{
						name:'КолонкаСтраховая',
					},
					{
						name:'НачисленоСтраховая',
					},
					{
						name:'ДоначисленоСтраховая',
					},
					{
						name:'УплаченоСтраховая',
					},
					{
						name:'ДоУплаченоСтраховая',
					},
					{
						name:'КолонкаНакопительная',
					},
					{
						name:'НачисленоНакопительная',
					},
					{
						name:'ДоначисленоНакопительная',
					},
					{
						name:'УплаченоНакопительная',
					},
					{
						name:'ДоУплаченоНакопительная',
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
						var грид = Ext.getCmp('РаботникиОрганизации');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.СведенияОТрудовомСтажеИЗаработкеСЗВ4.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СведенияОТрудовомСтажеИЗаработкеСЗВ4.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:1000px;height:25px;',
			width: 1000,
			height: 25,
			items:
			[
			]
		},
		{
			xtype: 'label',
			text: 'Застрахованные лица',
			style: 'position:absolute;left:8px;top:246px;width:984px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Принято в ПФР',
			style: 'position:absolute;left:886px;top:468px;width:106px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРуководитель',
			text: 'Руководитель:',
			style: 'position:absolute;left:8px;top:81px;width:93px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'Руководитель.Представление',
			width: 120,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:102px;top:81px;width:120px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.СведенияОТрудовомСтажеИЗаработкеСЗВ4.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.СведенияОТрудовомСтажеИЗаработкеСЗВ4.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.СведенияОТрудовомСтажеИЗаработкеСЗВ4.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.СведенияОТрудовомСтажеИЗаработкеСЗВ4.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьДолжностьРуководителя',
			text: 'Должность:',
			style: 'position:absolute;left:226px;top:81px;width:65px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ДолжностьРуководителя.Представление',
			width: 126,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:294px;top:81px;width:126px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.СведенияОТрудовомСтажеИЗаработкеСЗВ4.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.СведенияОТрудовомСтажеИЗаработкеСЗВ4.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.СведенияОТрудовомСтажеИЗаработкеСЗВ4.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.СведенияОТрудовомСтажеИЗаработкеСЗВ4.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПериод1',
			text: 'Отчетный период:',
			style: 'position:absolute;left:8px;top:57px;width:93px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтчетныйПериод',
			width: 318,
			height: 19,
			style: 'position:absolute;left:102px;top:57px;width:318px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:107px;width:984px;height:69px;',
			height: 69,width: 984,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьКатегорияЗастрахованныхЛиц',
			text: 'Категория застрахованных лиц:',
			style: 'position:absolute;left:0px;top:50px;width:174px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'КатегорияЗастрахованныхЛиц.Представление',
			width: 206,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:182px;top:50px;width:206px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.СведенияОТрудовомСтажеИЗаработкеСЗВ4.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.СведенияОТрудовомСтажеИЗаработкеСЗВ4.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.СведенияОТрудовомСтажеИЗаработкеСЗВ4.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.СведенияОТрудовомСтажеИЗаработкеСЗВ4.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПериод2',
			text: 'Корректируемый период:',
			style: 'position:absolute;left:404px;top:25px;width:130px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КорректируемыйПериод',
			width: 206,
			height: 19,
			style: 'position:absolute;left:537px;top:25px;width:206px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипФормы1',
			text: 'Тип формы:',
			style: 'position:absolute;left:0px;top:0px;width:93px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'СЗВ-6-1',
			style: 'position:absolute;left:94px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'СЗВ-6-2',
			style: 'position:absolute;left:182px;top:0px;width:109px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипСведений1',
			text: 'Тип сведений:',
			style: 'position:absolute;left:0px;top:25px;width:93px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Отменяющие',
			style: 'position:absolute;left:299px;top:25px;width:89px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Передавать доуплаченные суммы',
			style: 'position:absolute;left:754px;top:25px;width:206px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Исходные',
			style: 'position:absolute;left:94px;top:25px;width:80px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Корректирующие',
			style: 'position:absolute;left:182px;top:25px;width:109px;height:19px;',
		},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСпециальногоДокумента',
			text: 'Надпись специального документа',
			style: 'position:absolute;left:6px;top:25px;width:972px;height:38px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьТерриториальные',
			text: ' с территориальными условиями:',
			style: 'position:absolute;left:241px;top:0px;width:171px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ТерриториальныеУсловия.Представление',
			width: 66,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:415px;top:0px;width:66px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.СведенияОТрудовомСтажеИЗаработкеСЗВ4.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.СведенияОТрудовомСтажеИЗаработкеСЗВ4.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.СведенияОТрудовомСтажеИЗаработкеСЗВ4.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.СведенияОТрудовомСтажеИЗаработкеСЗВ4.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьТипФормы',
			text: 'Тип формы:',
			style: 'position:absolute;left:0px;top:0px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипСведений',
			text: 'Тип сведений:',
			style: 'position:absolute;left:0px;top:25px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидКорректировки',
			text: 'Корректировка:',
			style: 'position:absolute;left:0px;top:50px;width:88px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'СЗВ-4-1',
			style: 'position:absolute;left:94px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'СЗВ-4-2',
			style: 'position:absolute;left:182px;top:0px;width:59px;height:19px;',
		},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Исходные',
			style: 'position:absolute;left:94px;top:25px;width:80px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Назначение пенсии',
			style: 'position:absolute;left:182px;top:25px;width:119px;height:19px;',
		},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Отсутствует',
			style: 'position:absolute;left:94px;top:50px;width:80px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Корректирующая',
			style: 'position:absolute;left:182px;top:50px;width:119px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Отменяющая',
			style: 'position:absolute;left:308px;top:50px;width:87px;height:19px;',
		},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНомерПачки',
			text: 'Номер пачки:',
			style: 'position:absolute;left:465px;top:81px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерПачки',
			width: 80,
			height: 19,
			style: 'position:absolute;left:553px;top:81px;width:80px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:176px;width:984px;height:65px;',
			height: 65,width: 984,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСостояниеПачекДокументов',
			text: 'Распределение сумм уплаченных взносов производится по коэффициентам текущего периода без учета переданных ранее в ПФР сведений.',
			style: 'position:absolute;left:29px;top:0px;width:955px;height:35px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПерейтиПодготовкаДанныхПФР',
			text: 'Перейти в рабочее место Подготовка данных ПФР',
			style: 'position:absolute;left:0px;top:35px;width:267px;height:19px;',
		},
					]
				},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:495px;width:1000px;height:25px;',
			width: 1000,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Проверить в CheckXML',
					tooltip:'Проверить файл программой CheckXML',
				},
				'-',
				{
					text:'Показать файл',
					tooltip:'Сформировать и показать файл',
				},
				'-',
				{
					text:'Записать файл на диск',
					tooltip:'Записать файл на диск или дискетку',
				},
				'-',
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