Ext.define('Документы.ИнвентаризацияОС.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:664px;height:454px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Инвентаризация ОС',
	
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'Надпись1',
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
			style: 'position:absolute;left:98px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:180px;top:33px;width:16px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:198px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:404px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 549,
			height: 19,
			style: 'position:absolute;left:110px;top:404px;width:549px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
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
			style: 'position:absolute;left:98px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:337px;top:57px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Подразделение',
			width: 220,
			height: 19,
			style: 'position:absolute;left:438px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:84px;width:650px;height:315px;',
			height: 315,width: 650,
			items:
			[
				{
					title:'Основные средства',
					items:
					[
		{
			id: 'ОС',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:637px;height:265px;',
			height: 265,width: 637,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Основное средство',
					width:'2200',
					dataIndex:'ОсновноеСредство',
					flex:1,
				},
				{
					text:'Инв. №',
					width:'80',
					dataIndex:'ИнвентарныйНомер',
					flex:1,
				},
				{
					text:'МОЛ',
					width:'1200',
					dataIndex:'МОЛ',
					flex:1,
				},
				{
					text:'Стоимость по данным учета',
					width:'1200',
					dataIndex:'СтоимостьПоДаннымУчета',
					flex:1,
				},
				{
					text:'Наличие по данным учета',
					width:'1200',
					dataIndex:'НаличиеПоДаннымУчета',
					flex:1,
				},
				{
					text:'Фактическая стоимость',
					width:'1200',
					dataIndex:'СтоимостьФактическая',
					flex:1,
				},
				{
					text:'Фактическое наличие',
					width:'1200',
					dataIndex:'НаличиеФактическое',
					flex:1,
				},
				{
					text:'Излишек, сумма',
					width:'1200',
					dataIndex:'ИзлишекСумма',
					flex:1,
				},
				{
					text:'Излишек, количество',
					width:'1200',
					dataIndex:'ИзлишекКоличество',
					flex:1,
				},
				{
					text:'Недостача, сумма',
					width:'1200',
					dataIndex:'НедостачаСумма',
					flex:1,
				},
				{
					text:'Недостача, количество',
					width:'1200',
					dataIndex:'НедостачаКоличество',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИнвентаризацияОС/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ОсновноеСредство',
					},
					{
						name:'ИнвентарныйНомер',
					},
					{
						name:'МОЛ',
					},
					{
						name:'СтоимостьПоДаннымУчета',
					},
					{
						name:'НаличиеПоДаннымУчета',
					},
					{
						name:'СтоимостьФактическая',
					},
					{
						name:'НаличиеФактическое',
					},
					{
						name:'ИзлишекСумма',
					},
					{
						name:'ИзлишекКоличество',
					},
					{
						name:'НедостачаСумма',
					},
					{
						name:'НедостачаКоличество',
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
						var грид = Ext.getCmp('ОС');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.Банки.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Банки.ФормаЭлементаСобытия");
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
			name: 'Надпись5',
			text: 'Ответственный:',
			style: 'position:absolute;left:6px;top:270px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Ответственный',
			width: 543,
			height: 19,
			style: 'position:absolute;left:100px;top:270px;width:543px;height:19px;',
		},
		{
			id: 'ИнвентаризационнаяКомиссия',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:141px;width:637px;height:123px;',
			height: 123,width: 637,
			columns:
			[
				{
					text:'№',
					width:'25',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Члены комиссии',
					width:'123',
					dataIndex:'ФизЛицо',
					flex:1,
				},
				{
					text:'Председатель',
					width:'80',
					dataIndex:'Председатель',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИнвентаризацияОС/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ФизЛицо',
					},
					{
						name:'Председатель',
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
						var грид = Ext.getCmp('ИнвентаризационнаяКомиссия');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.Банки.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Банки.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДокументОснованиеВид',
			width: 220,
			height: 19,
			style: 'position:absolute;left:89px;top:27px;width:220px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДокументОснованиеДата',
			width: 80,
			height: 19,
			style: 'position:absolute;left:229px;top:51px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДокументОснованиеНомер',
			width: 115,
			height: 19,
			style: 'position:absolute;left:89px;top:51px;width:115px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДокументОснованиеВид',
			text: 'Документ:',
			style: 'position:absolute;left:12px;top:27px;width:67px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Номер:',
			style: 'position:absolute;left:12px;top:51px;width:69px;height:19px;text-align:left;',
		},
		{
			xtype: 'fieldset',
			title: 'Инвентаризационная комиссия',
			style: 'position:absolute;left:6px;top:102px;width:637px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Проведение инвентаризации',
			style: 'position:absolute;left:6px;top:6px;width:637px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНачалаИнвентаризации',
			text: 'Дата начала:',
			style: 'position:absolute;left:328px;top:27px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНачалаИнвентаризации',
			width: 80,
			height: 19,
			style: 'position:absolute;left:429px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаОкончанияИнвентаризации',
			width: 80,
			height: 19,
			style: 'position:absolute;left:429px;top:51px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПричинаИнвентаризации',
			text: 'Причина:',
			style: 'position:absolute;left:12px;top:75px;width:65px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПричинаИнвентаризации',
			width: 554,
			height: 19,
			style: 'position:absolute;left:89px;top:75px;width:554px;height:19px;',
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
			style: 'position:absolute;left:0px;top:0px;width:664px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Найти в списке',
				},
				'-',
				{
					text:'Перечитать',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Записать',
				},
				{
					text:'Записать и закрыть',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
					]
				},
				'-',
				{
					text:'Закрыть',
				},
					]
				},
				'-',
				{
					text:'Найти в списке',
				},
				'-',
				{
					text:'Перечитать',
				},
				{
					text:'Скопировать',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'(Ввести на основании)',
				},
					]
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'',
				},
					]
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:429px;width:664px;height:25px;',
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
				},
			]
		},
	]
});