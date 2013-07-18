Ext.require(['Данные.Документы.АктОтбораПробНоменклатуры'], function () 
{
	Ext.define('Документы.АктОтбораПробНоменклатуры.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:652px;height:400px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Акт отбора проб номенклатуры',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:652px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:375px;width:652px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Печать',
				},
				'-',
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
			name: 'Надпись5',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация',
			width: 220,
			height: 19,
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
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
			xtype: 'label',
			name: 'Надпись10',
			text: 'от:',
			style: 'position:absolute;left:178px;top:33px;width:16px;height:19px;text-align:left;',
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
			xtype: 'label',
			name: 'Надпись13',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:348px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 548,
			height: 19,
			style: 'position:absolute;left:96px;top:348px;width:548px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись15',
			text: 'Заявка на сертификацию:',
			style: 'position:absolute;left:336px;top:101px;width:88px;height:27px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ДокументОснование',
			width: 220,
			height: 19,
			style: 'position:absolute;left:424px;top:105px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Номенклатура:',
			style: 'position:absolute;left:8px;top:81px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Номенклатура',
			width: 220,
			height: 19,
			style: 'position:absolute;left:96px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись16',
			text: 'Серия:',
			style: 'position:absolute;left:336px;top:81px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'СерияНоменклатуры',
			width: 220,
			height: 19,
			style: 'position:absolute;left:424px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:132px;width:636px;height:208px;',
			height: 208,width: 636,
			items:
			[
				{
					title:'Распределение по лабораториям',
					items:
					[
		{
			id: 'РаспределениеПоЛабораториям',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:33px;width:622px;height:149px;',
			height: 149,width: 622,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Сертифицирующее подразделение',
					width:'187',
					dataIndex:'Подразделение',
					flex:1,
				},
				{
					text:'Вид анализа',
					width:'95',
					dataIndex:'ВидАнализа',
					flex:1,
				},
				{
					text:'Количество',
					width:'96',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Ед. хранения',
					width:'100',
					dataIndex:'ЕдиницаХранения',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/АктОтбораПробНоменклатуры/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Подразделение',
					},
					{
						name:'ВидАнализа',
					},
					{
						name:'Количество',
					},
					{
						name:'ЕдиницаХранения',
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
						var грид = Ext.getCmp('РаспределениеПоЛабораториям');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.АктОтбораПробНоменклатуры.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.АктОтбораПробНоменклатуры.ФормаДокументаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
					]
				},
				{
					title:'Пробы для внешней сертификации',
					items:
					[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ОрганПоСертификации',
			width: 477,
			height: 19,
			style: 'position:absolute;left:151px;top:6px;width:477px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Испытания',
			style: 'position:absolute;left:151px;top:31px;width:156px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КонтрольнаяПроба',
			style: 'position:absolute;left:505px;top:29px;width:123px;height:19px;',
		},
					]
				},
				{
					title:'Изъятие проб',
					items:
					[
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'РезультатНаружногоОсмотра',
			style: 'position:absolute;left:6px;top:27px;width:622px;height:50px;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'ЗамечанияКУпаковкеМаркировке',
			style: 'position:absolute;left:6px;top:107px;width:622px;height:50px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоВскрытыхУпаковок',
			text: 'Количество вскрытых упаковок:',
			style: 'position:absolute;left:6px;top:162px;width:166px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоличествоВскрытыхУпаковок',
			style: 'position:absolute;left:173px;top:162px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Температура',
			width: 80,
			height: 19,
			style: 'position:absolute;left:399px;top:162px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Влажность',
			width: 80,
			height: 19,
			style: 'position:absolute;left:548px;top:162px;width:80px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Результат наружного осмотра:',
			style: 'position:absolute;left:6px;top:6px;width:622px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Замечания к упаковке, маркировке:',
			style: 'position:absolute;left:6px;top:86px;width:622px;height:16px;',
		},
					]
				},
				{
					title:'Дополнительно',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Ответственный:',
			style: 'position:absolute;left:324px;top:27px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Ответственный',
			width: 216,
			height: 19,
			style: 'position:absolute;left:412px;top:27px;width:216px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись12',
			text: 'Подразделение:',
			style: 'position:absolute;left:6px;top:27px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Подразделение',
			width: 216,
			height: 19,
			style: 'position:absolute;left:94px;top:27px;width:216px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись18',
			text: 'Количество образцов, отобранных для испытаний:',
			style: 'position:absolute;left:6px;top:27px;width:145px;height:27px;text-align:left;',
		},
		{
			xtype: 'fieldset',
			title: 'Дополнительная информация',
			style: 'position:absolute;left:6px;top:6px;width:622px;height:16px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Нормативный документ:',
			style: 'position:absolute;left:8px;top:101px;width:88px;height:27px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'НормативныйДокумент',
			width: 220,
			height: 19,
			style: 'position:absolute;left:96px;top:105px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись17',
			text: 'Склад:',
			style: 'position:absolute;left:336px;top:57px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Склад',
			width: 220,
			height: 19,
			style: 'position:absolute;left:424px;top:57px;width:220px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});