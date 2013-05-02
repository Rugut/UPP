Ext.define('Документы.ЗаписьКУДиР.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:736px;height:420px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Запись книги учета доходов и расходов УСН (ручной учет)',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:90px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:172px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:190px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:90px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:736px;height:25px;',
			items:
			[
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
					text:'Дт/кт',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:395px;width:736px;height:25px;',
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
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:368px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:368px;width:634px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:86px;width:720px;height:253px;',
			height: 253,width: 720,
			items:
			[
				{
					title:'I. Доходы и расходы',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:698px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:698px;height:197px;',
			height: 197,width: 698,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Дата и № первичного документа',
					width:'60',
					dataIndex:'ДатаНомер',
					flex:1,
				},
				{
					text:'Содержание',
					width:'120',
					dataIndex:'Содержание',
					flex:1,
				},
				{
					text:'Доходы всего',
					width:'80',
					dataIndex:'Графа4',
					flex:1,
				},
				{
					text:'Доходы, учитываемые при расчете ЕН ',
					width:'80',
					dataIndex:'Графа5',
					flex:1,
				},
				{
					text:'Расходы всего',
					width:'80',
					dataIndex:'Графа6',
					flex:1,
				},
				{
					text:'Расходы, учитываемые при расчете ЕН',
					width:'128',
					dataIndex:'Графа7',
					flex:1,
				},
				{
					text:'НДС',
					width:'128',
					dataIndex:'НДС',
					flex:1,
				},
				{
					text:'Доходы по деятельности ЕНВД',
					width:'120',
					dataIndex:'ДоходыЕНВД',
					flex:1,
				},
				{
					text:'Расходы, подлежат распределению по видам деятельности',
					width:'120',
					dataIndex:'РасходыЕНВД',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗаписьКУДиР/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ДатаНомер',
					},
					{
						name:'Содержание',
					},
					{
						name:'Графа4',
					},
					{
						name:'Графа5',
					},
					{
						name:'Графа6',
					},
					{
						name:'Графа7',
					},
					{
						name:'НДС',
					},
					{
						name:'ДоходыЕНВД',
					},
					{
						name:'РасходыЕНВД',
					},
				]
			},
		},
					]
				},
				{
					title:'II. Расчет расходов на приобретение ОС',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:706px;height:197px;',
			height: 197,width: 706,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Основное средство',
					width:'120',
					dataIndex:'ОсновноеСредство',
					flex:1,
				},
				{
					text:'Дата оплаты',
					width:'80',
					dataIndex:'ДатаОплаты',
					flex:1,
				},
				{
					text:'Первоначальная стоимость',
					width:'80',
					dataIndex:'Графа5_ПервоначальнаяСтоимость',
					flex:1,
				},
				{
					text:'Дата подачи док. на гос. регистрацию',
					width:'100',
					dataIndex:'Графа4_ГосударственнаяРегистрация',
					flex:1,
				},
				{
					text:'Остаточная стоимость',
					width:'80',
					dataIndex:'Графа6_ОстаточнаяСтоимость',
					flex:1,
				},
				{
					text:'Количество кварталов в отчет. периоде',
					width:'80',
					dataIndex:'Графа8_КолКварталовВОтчетномПериоде',
					flex:1,
				},
				{
					text:'Количество кварталов в нал. периоде',
					width:'80',
					dataIndex:'Графа9_КолКварталовВНалПериоде',
					flex:1,
				},
				{
					text:'Доля расходов за нал. период (%)',
					width:'80',
					dataIndex:'Графа10_ДоляРасходовЗаНалПериод',
					flex:1,
				},
				{
					text:'Доля расходов за квартал (%)',
					width:'80',
					dataIndex:'Графа11_ДоляРасходовЗаКвартал',
					flex:1,
				},
				{
					text:'Сумма расходов за отчетн. период',
					width:'80',
					dataIndex:'Графа12_СуммаРасходовЗаОтчетнПериод',
					flex:1,
				},
				{
					text:'Сумма расходов за квартал',
					width:'80',
					dataIndex:'Графа13_СуммаРасходовЗаКвартал',
					flex:1,
				},
				{
					text:'Расходы предыдущих периодов',
					width:'80',
					dataIndex:'Графа14_РасходыПрошлыхПериодов',
					flex:1,
				},
				{
					text:'Остаток расходов',
					width:'80',
					dataIndex:'Графа15_ОстатокРасходов',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗаписьКУДиР/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ОсновноеСредство',
					},
					{
						name:'ДатаОплаты',
					},
					{
						name:'Графа5_ПервоначальнаяСтоимость',
					},
					{
						name:'Графа4_ГосударственнаяРегистрация',
					},
					{
						name:'Графа6_ОстаточнаяСтоимость',
					},
					{
						name:'Графа8_КолКварталовВОтчетномПериоде',
					},
					{
						name:'Графа9_КолКварталовВНалПериоде',
					},
					{
						name:'Графа10_ДоляРасходовЗаНалПериод',
					},
					{
						name:'Графа11_ДоляРасходовЗаКвартал',
					},
					{
						name:'Графа12_СуммаРасходовЗаОтчетнПериод',
					},
					{
						name:'Графа13_СуммаРасходовЗаКвартал',
					},
					{
						name:'Графа14_РасходыПрошлыхПериодов',
					},
					{
						name:'Графа15_ОстатокРасходов',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:706px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'II. Расчет расходов на приобретение НМА',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:706px;height:197px;',
			height: 197,width: 706,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Нематериальный актив',
					width:'120',
					dataIndex:'НематериальныйАктив',
					flex:1,
				},
				{
					text:'Дата оплаты',
					width:'80',
					dataIndex:'ДатаОплаты',
					flex:1,
				},
				{
					text:'Первоначальная стоимость',
					width:'80',
					dataIndex:'Графа5_ПервоначальнаяСтоимость',
					flex:1,
				},
				{
					text:'Остаточная стоимость',
					width:'80',
					dataIndex:'Графа6_ОстаточнаяСтоимость',
					flex:1,
				},
				{
					text:'Количество кварталов в отчет. периоде',
					width:'80',
					dataIndex:'Графа8_КолКварталовВОтчетномПериоде',
					flex:1,
				},
				{
					text:'Количество кварталов в нал. периоде',
					width:'80',
					dataIndex:'Графа9_КолКварталовВНалПериоде',
					flex:1,
				},
				{
					text:'Доля расходов за нал. период (%)',
					width:'80',
					dataIndex:'Графа10_ДоляРасходовЗаНалПериод',
					flex:1,
				},
				{
					text:'Доля расходов за квартал (%)',
					width:'80',
					dataIndex:'Графа11_ДоляРасходовЗаКвартал',
					flex:1,
				},
				{
					text:'Сумма расходов за отчетн. период',
					width:'80',
					dataIndex:'Графа12_СуммаРасходовЗаОтчетнПериод',
					flex:1,
				},
				{
					text:'Сумма расходов за квартал',
					width:'80',
					dataIndex:'Графа13_СуммаРасходовЗаКвартал',
					flex:1,
				},
				{
					text:'Расходы предыдущих периодов',
					width:'80',
					dataIndex:'Графа14_РасходыПрошлыхПериодов',
					flex:1,
				},
				{
					text:'Остаток расходов',
					width:'80',
					dataIndex:'Графа15_ОстатокРасходов',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗаписьКУДиР/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'НематериальныйАктив',
					},
					{
						name:'ДатаОплаты',
					},
					{
						name:'Графа5_ПервоначальнаяСтоимость',
					},
					{
						name:'Графа6_ОстаточнаяСтоимость',
					},
					{
						name:'Графа8_КолКварталовВОтчетномПериоде',
					},
					{
						name:'Графа9_КолКварталовВНалПериоде',
					},
					{
						name:'Графа10_ДоляРасходовЗаНалПериод',
					},
					{
						name:'Графа11_ДоляРасходовЗаКвартал',
					},
					{
						name:'Графа12_СуммаРасходовЗаОтчетнПериод',
					},
					{
						name:'Графа13_СуммаРасходовЗаКвартал',
					},
					{
						name:'Графа14_РасходыПрошлыхПериодов',
					},
					{
						name:'Графа15_ОстатокРасходов',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:706px;height:24px;',
			items:
			[
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:344px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:94px;top:344px;width:634px;height:19px;',
		},
	]
});