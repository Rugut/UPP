Ext.define('Документы.ПринятиеКУчетуОС.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:706px;height:559px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Принятие к учету ОС',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:534px;width:706px;height:25px;',
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
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:90px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:172px;top:33px;width:16px;height:19px;text-align:center;',
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
			style: 'position:absolute;left:190px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтражатьВ',
			text: 'Отражать в:',
			style: 'position:absolute;left:330px;top:33px;width:84px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:80px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:90px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'упр. учете',
			style: 'position:absolute;left:416px;top:33px;width:72px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'бух. учете',
			style: 'position:absolute;left:494px;top:33px;width:70px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:507px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 608,
			height: 19,
			style: 'position:absolute;left:90px;top:507px;width:608px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:84px;width:690px;height:396px;',
			height: 396,width: 690,
			items:
			[
				{
					title:'Основные средства',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:212px;width:676px;height:157px;',
			height: 157,width: 676,
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
					width:'366',
					dataIndex:'ОсновноеСредство',
					flex:1,
				},
				{
					text:'Инв. №',
					width:'100',
					dataIndex:'ИнвНомер',
					flex:1,
				},
				{
					text:'Инв. № (Орг)',
					width:'112',
					dataIndex:'ИнвентарныйНомер',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПринятиеКУчетуОС/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ОсновноеСредство',
					},
					{
						name:'ИнвНомер',
					},
					{
						name:'ИнвентарныйНомер',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:188px;width:676px;height:24px;',
			items:
			[
				'-',
				'-',
				{
					text:'Подбор',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСоставОС',
			text: 'Входит в состав основного средства:',
			style: 'position:absolute;left:6px;top:30px;width:193px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьМОЛБУ',
			text: 'Материально-ответственное лицо:',
			style: 'position:absolute;left:6px;top:30px;width:202px;height:19px;text-align:left;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:676px;height:162px;',
			height: 162,width: 676,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Основные средства со склада',
					items:
					[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Склад',
			width: 274,
			height: 19,
			style: 'position:absolute;left:402px;top:0px;width:274px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьХарактеристика',
			text: 'Характеристика:',
			style: 'position:absolute;left:0px;top:23px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ХарактеристикаНоменклатуры',
			width: 206,
			height: 19,
			style: 'position:absolute;left:90px;top:23px;width:206px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СерияНоменклатуры',
			width: 206,
			height: 19,
			style: 'position:absolute;left:90px;top:46px;width:206px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОборудование',
			text: 'Оборудование:',
			style: 'position:absolute;left:0px;top:0px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Номенклатура',
			width: 206,
			height: 19,
			style: 'position:absolute;left:90px;top:0px;width:206px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'СчетУчетаБУВнеоборотногоАктива',
			width: 79,
			height: 19,
			style: 'position:absolute;left:402px;top:23px;width:79px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'СчетУчетаНУВнеоборотногоАктива',
			width: 79,
			height: 19,
			style: 'position:absolute;left:402px;top:46px;width:79px;height:19px;',
		},
					]
				},
				{
					title:'Объекты строительства',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОбъектСтроительства',
			text: 'Объект:',
			style: 'position:absolute;left:389px;top:0px;width:60px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ОбъектСтроительства',
			width: 225,
			height: 19,
			style: 'position:absolute;left:451px;top:0px;width:225px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтоимость',
			text: 'Сумма (УУ):',
			style: 'position:absolute;left:162px;top:0px;width:64px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Стоимость',
			style: 'position:absolute;left:228px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетУчетаБУВнеоборотногоАктива1',
			text: 'Счет (БУ):',
			style: 'position:absolute;left:0px;top:24px;width:60px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'СчетУчетаБУВнеоборотногоАктива1',
			width: 80,
			height: 19,
			style: 'position:absolute;left:62px;top:24px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетУчетаНУВнеоборотногоАктива1',
			text: 'Счет (НУ):',
			style: 'position:absolute;left:0px;top:48px;width:60px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'СчетУчетаНУВнеоборотногоАктива1',
			width: 80,
			height: 19,
			style: 'position:absolute;left:62px;top:48px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтоимостьБУ',
			text: 'Сумма (БУ):',
			style: 'position:absolute;left:162px;top:24px;width:64px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СтоимостьБУ',
			style: 'position:absolute;left:228px;top:24px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'УпрВалюта',
			text: 'УпрВалюта',
			style: 'position:absolute;left:310px;top:0px;width:60px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'РеглВалюта1',
			text: 'РеглВалюта',
			style: 'position:absolute;left:310px;top:24px;width:60px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'РассчитатьСтоимость',
			text: 'Рассчитать суммы',
			style: 'position:absolute;left:0px;top:0px;width:142px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтоимостьНУ',
			text: 'Сумма (НУ):',
			style: 'position:absolute;left:162px;top:48px;width:64px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СтоимостьНУ',
			style: 'position:absolute;left:228px;top:48px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'РеглВалюта3',
			text: 'РеглВалюта',
			style: 'position:absolute;left:310px;top:48px;width:60px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтоимостьБУХоз',
			text: 'В том числе хоз. способом:',
			style: 'position:absolute;left:389px;top:24px;width:143px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СтоимостьБУХоз',
			style: 'position:absolute;left:534px;top:24px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'РеглВалюта2',
			text: 'РеглВалюта',
			style: 'position:absolute;left:616px;top:24px;width:60px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтоимостьНУХоз',
			text: 'В том числе хоз. способом:',
			style: 'position:absolute;left:389px;top:48px;width:143px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СтоимостьНУХоз',
			style: 'position:absolute;left:534px;top:48px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'РеглВалюта4',
			text: 'РеглВалюта',
			style: 'position:absolute;left:616px;top:48px;width:60px;height:19px;text-align:center;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'СтавкаНДС',
			width: 75,
			height: 19,
			style: 'position:absolute;left:457px;top:120px;width:75px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаНДС',
			style: 'position:absolute;left:596px;top:120px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтавкаНДС',
			text: 'Ставка НДС:',
			style: 'position:absolute;left:389px;top:120px;width:68px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНДС',
			text: 'НДС:',
			style: 'position:absolute;left:562px;top:120px;width:30px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'НДС включен в стоимость',
			style: 'position:absolute;left:162px;top:120px;width:208px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтоимостьПР',
			text: 'Сумма (ПР):',
			style: 'position:absolute;left:162px;top:72px;width:64px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СтоимостьПР',
			style: 'position:absolute;left:228px;top:72px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'РеглВалюта5',
			text: 'РеглВалюта',
			style: 'position:absolute;left:310px;top:72px;width:60px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтоимостьПРХоз',
			text: 'В том числе хоз. способом:',
			style: 'position:absolute;left:389px;top:72px;width:143px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СтоимостьПРХоз',
			style: 'position:absolute;left:534px;top:72px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'РеглВалюта6',
			text: 'РеглВалюта',
			style: 'position:absolute;left:616px;top:72px;width:60px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтоимостьВР',
			text: 'Сумма (ВР):',
			style: 'position:absolute;left:162px;top:96px;width:64px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СтоимостьВР',
			style: 'position:absolute;left:228px;top:96px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'РеглВалюта7',
			text: 'РеглВалюта',
			style: 'position:absolute;left:310px;top:96px;width:60px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтоимостьВРХоз',
			text: 'В том числе хоз. способом:',
			style: 'position:absolute;left:389px;top:96px;width:143px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СтоимостьВРХоз',
			style: 'position:absolute;left:534px;top:96px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'РеглВалюта8',
			text: 'РеглВалюта',
			style: 'position:absolute;left:616px;top:96px;width:60px;height:19px;text-align:center;',
		},
					]
				},
				{
					title:'Источник не указан',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСерия',
			text: 'Серия:',
			style: 'position:absolute;left:0px;top:46px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтоимостьУУ',
			text: 'Стоимость (упр. учет):',
			style: 'position:absolute;left:0px;top:1px;width:116px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СтоимостьУУ',
			style: 'position:absolute;left:118px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'УпрВалюта1',
			text: 'УпрВалюта',
			style: 'position:absolute;left:204px;top:0px;width:60px;height:19px;text-align:center;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСпособыОтраженияРасходовПоАмортизации',
			text: 'Способы отражения расходов\r\nпо амортизации (погашению стоимости):',
			style: 'position:absolute;left:6px;top:33px;width:225px;height:32px;text-align:left;',
		},
		{
			xtype: 'fieldset',
			title: 'Основные средства',
			style: 'position:absolute;left:6px;top:173px;width:676px;height:16px;',
		},
					]
				},
				{
					title:'Общие сведения',
					items:
					[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'СпособыОтраженияРасходовПоАмортизации',
			width: 295,
			height: 19,
			style: 'position:absolute;left:233px;top:46px;width:295px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ШифрПоЕНАОФ',
			width: 295,
			height: 19,
			style: 'position:absolute;left:233px;top:6px;width:295px;height:19px;',
		},
					]
				},
				{
					title:'Управленческий учет',
					items:
					[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'СоставОсновногоСредства',
			width: 186,
			height: 19,
			style: 'position:absolute;left:210px;top:30px;width:186px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение предприятия:',
			style: 'position:absolute;left:6px;top:6px;width:155px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Подразделение',
			width: 186,
			height: 19,
			style: 'position:absolute;left:210px;top:6px;width:186px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМОЛУУ',
			text: 'Материально- ответственное лицо:',
			style: 'position:absolute;left:406px;top:6px;width:83px;height:44px;text-align:center;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'МОЛУУ',
			width: 188,
			height: 19,
			style: 'position:absolute;left:494px;top:18px;width:188px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Начислять амортизацию',
			style: 'position:absolute;left:450px;top:219px;width:149px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Начислять в текущем месяце',
			style: 'position:absolute;left:450px;top:243px;width:175px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СпособНачисленияАмортизацииУУ',
			width: 220,
			height: 19,
			style: 'position:absolute;left:210px;top:147px;width:220px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СрокПолезногоИспользованияУУ',
			style: 'position:absolute;left:210px;top:219px;width:80px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПредполагаемыйОбъемПродукцииУУ',
			style: 'position:absolute;left:210px;top:195px;width:80px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ГодоваяНормаАмортизацииУУ',
			style: 'position:absolute;left:210px;top:243px;width:80px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ГрафикАмортизацииПоГодуУУ',
			width: 136,
			height: 19,
			style: 'position:absolute;left:210px;top:267px;width:136px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоэффициентУскоренияУУ',
			style: 'position:absolute;left:585px;top:195px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИндивидуальныйГрафикАмортизацииУУ',
			text: 'Индивидуальный график:',
			style: 'position:absolute;left:353px;top:267px;width:133px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ИндивидуальныйГрафикАмортизации',
			width: 187,
			height: 19,
			style: 'position:absolute;left:495px;top:267px;width:187px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделениеОрганизации',
			text: 'Подразделение организации:',
			style: 'position:absolute;left:6px;top:6px;width:202px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ПараметрВыработкиУУ',
			width: 220,
			height: 19,
			style: 'position:absolute;left:210px;top:171px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьШифрПоЕНАОФ',
			text: 'ЕНАОФ:',
			style: 'position:absolute;left:6px;top:6px;width:74px;height:19px;text-align:left;',
		},
		{
			xtype: 'fieldset',
			title: 'Параметры и графики амортизации:',
			style: 'position:absolute;left:6px;top:126px;width:676px;height:16px;',
		},
		{
			xtype: 'button',
			name: 'ЗаполнитьУУ',
			text: 'Заполнить по данным бух. учета',
			style: 'position:absolute;left:480px;top:147px;width:196px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'События основного средства:',
			style: 'position:absolute;left:6px;top:54px;width:676px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеПринятоКУчету',
			text: 'Принятие к учету:',
			style: 'position:absolute;left:12px;top:74px;width:120px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СобытиеПринятиеКУчету',
			width: 186,
			height: 19,
			style: 'position:absolute;left:210px;top:74px;width:186px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Принятие к учету с вводом в эксплуатацию',
			style: 'position:absolute;left:438px;top:74px;width:244px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВводВЭксплуатацию',
			text: 'Ввод в эксплуатацию:',
			style: 'position:absolute;left:12px;top:98px;width:120px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СобытиеВводаВЭксплуатацию',
			width: 186,
			height: 19,
			style: 'position:absolute;left:210px;top:98px;width:186px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'РасшифровкаСрокаПолезногоИспользованияУУ',
			text: '',
			style: 'position:absolute;left:295px;top:219px;width:135px;height:19px;',
		},
					]
				},
				{
					title:'Бухгалтерский учет',
					items:
					[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'МОЛБУ',
			width: 186,
			height: 19,
			style: 'position:absolute;left:210px;top:30px;width:186px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-trigger-square',
			trigger2Cls: 'x-form-select-trigger',
			trigger3Cls: 'x-form-clear-trigger',
			trigger4Cls: 'x-form-search-trigger',
			name: 'ПодразделениеОрганизации',
			width: 186,
			height: 19,
			style: 'position:absolute;left:210px;top:6px;width:186px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСпособПоступления',
			text: 'Способ поступления в организацию:',
			style: 'position:absolute;left:406px;top:6px;width:83px;height:44px;text-align:center;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'СпособПоступления',
			width: 188,
			height: 19,
			style: 'position:absolute;left:494px;top:18px;width:188px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СрокПолезногоИспользованияБУ',
			style: 'position:absolute;left:210px;top:219px;width:80px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Начислять амортизацию',
			style: 'position:absolute;left:450px;top:219px;width:148px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-trigger-square',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СпособНачисленияАмортизацииБУ',
			width: 220,
			height: 19,
			style: 'position:absolute;left:210px;top:147px;width:220px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'СчетУчетаБУ',
			width: 80,
			height: 19,
			style: 'position:absolute;left:585px;top:267px;width:80px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'СчетНачисленияАмортизацииБУ',
			width: 80,
			height: 19,
			style: 'position:absolute;left:585px;top:246px;width:80px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ГодоваяНормаАмортизацииБУ',
			style: 'position:absolute;left:210px;top:243px;width:80px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоэффициентУскоренияБУ',
			style: 'position:absolute;left:585px;top:195px;width:80px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПредполагаемыйОбъемПродукцииБУ',
			style: 'position:absolute;left:210px;top:195px;width:80px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ГрафикАмортизацииПоГодуБУ',
			width: 220,
			height: 19,
			style: 'position:absolute;left:210px;top:267px;width:220px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ЗаполнитьБУ',
			text: 'Заполнить по данным упр. учета',
			style: 'position:absolute;left:480px;top:147px;width:196px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Параметры и графики амортизации:',
			style: 'position:absolute;left:6px;top:126px;width:676px;height:16px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ПараметрВыработкиБУ',
			width: 220,
			height: 19,
			style: 'position:absolute;left:210px;top:171px;width:220px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'События основного средства:',
			style: 'position:absolute;left:6px;top:54px;width:676px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеПринятоКУчетуРегл',
			text: 'Принятие к учету:',
			style: 'position:absolute;left:12px;top:74px;width:120px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СобытиеПринятиеКУчетуРегл',
			width: 186,
			height: 19,
			style: 'position:absolute;left:210px;top:74px;width:186px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Принятие к учету с вводом в эксплуатацию',
			style: 'position:absolute;left:438px;top:74px;width:244px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВводВЭксплуатациюРегл',
			text: 'Ввод в эксплуатацию:',
			style: 'position:absolute;left:12px;top:98px;width:120px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СобытиеВводаВЭксплуатациюРегл',
			width: 186,
			height: 19,
			style: 'position:absolute;left:210px;top:98px;width:186px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'РасшифровкаСрокаПолезногоИспользованияБУ',
			text: '',
			style: 'position:absolute;left:295px;top:219px;width:135px;height:19px;',
		},
					]
				},
				{
					title:'Налоговый учет',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСчетУчетаНУ',
			text: 'Счет учета:',
			style: 'position:absolute;left:12px;top:29px;width:226px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СчетУчетаНУ',
			width: 80,
			height: 19,
			style: 'position:absolute;left:243px;top:29px;width:80px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Общие сведения',
			style: 'position:absolute;left:6px;top:6px;width:676px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПорядокВключенияСтоимостиВСоставРасходовНУ',
			text: 'Порядок включения стоимости\r\nв состав расходов:',
			style: 'position:absolute;left:12px;top:53px;width:226px;height:27px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ПорядокВключенияСтоимостиВСоставРасходовНУ',
			width: 240,
			height: 19,
			style: 'position:absolute;left:243px;top:53px;width:240px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:87px;width:676px;height:283px;',
			height: 283,width: 676,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Начисление амортизации',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Начислять амортизацию',
			style: 'position:absolute;left:327px;top:23px;width:155px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетНачисленияАмортизацииНУ',
			text: 'Счет начисления амортизации:',
			style: 'position:absolute;left:6px;top:23px;width:226px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'СчетНачисленияАмортизацииНУ',
			width: 80,
			height: 19,
			style: 'position:absolute;left:241px;top:23px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСрокПолезногоИспользованияНУ',
			text: 'Срок полезного использования (в месяцах):',
			style: 'position:absolute;left:6px;top:71px;width:226px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СрокПолезногоИспользованияНУ',
			style: 'position:absolute;left:241px;top:71px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСпециальныйКоэффициентНУ',
			text: 'Специальный коэффициент:',
			style: 'position:absolute;left:6px;top:95px;width:226px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СпециальныйКоэффициентНУ',
			style: 'position:absolute;left:241px;top:95px;width:80px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Параметры амортизации',
			style: 'position:absolute;left:0px;top:0px;width:676px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Включить амортизационную премию в состав расходов',
			style: 'position:absolute;left:6px;top:144px;width:427px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Амортизационная премия',
			style: 'position:absolute;left:0px;top:123px;width:676px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'РасшифровкаСрокаПолезногоИспользованияНУ',
			text: '',
			style: 'position:absolute;left:326px;top:71px;width:155px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:168px;width:676px;height:115px;',
			height: 115,width: 676,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВПроцентахОтПервоначальнойСтоимости',
			text: 'В процентах от первоначальной стоимости:',
			style: 'position:absolute;left:6px;top:0px;width:226px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПроцентКапитальныхВложенийВключаемыхВРасходыНУ',
			style: 'position:absolute;left:241px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СчетУчетаЗатратПоАмортизационнойПремии',
			width: 80,
			height: 19,
			style: 'position:absolute;left:241px;top:24px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетУчетаЗатратПоАмортизационнойПремии',
			text: 'Счет учета затрат:',
			style: 'position:absolute;left:6px;top:24px;width:228px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоПоАмортизационнойПремии1',
			text: 'Субконто НУ 1:',
			style: 'position:absolute;left:6px;top:48px;width:228px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоПоАмортизационнойПремии2',
			text: 'Субконто НУ 2:',
			style: 'position:absolute;left:6px;top:72px;width:228px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоПоАмортизационнойПремии3',
			text: 'Субконто НУ 3:',
			style: 'position:absolute;left:6px;top:96px;width:228px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СубконтоПоАмортизационнойПремии1',
			width: 238,
			height: 19,
			style: 'position:absolute;left:241px;top:48px;width:238px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СубконтоПоАмортизационнойПремии2',
			width: 238,
			height: 19,
			style: 'position:absolute;left:241px;top:72px;width:238px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СубконтоПоАмортизационнойПремии3',
			width: 238,
			height: 19,
			style: 'position:absolute;left:241px;top:96px;width:238px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:47px;width:670px;height:24px;',
			height: 24,width: 670,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСпособНачисленияАмортизацииНУ',
			text: 'Способ начисления амортизации (до 2009 г.):',
			style: 'position:absolute;left:0px;top:0px;width:232px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'СпособНачисленияАмортизацииНУ',
			width: 240,
			height: 19,
			style: 'position:absolute;left:235px;top:0px;width:240px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Включение в расходы при принятии к учету',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:27px;width:676px;height:256px;',
			height: 256,width: 676,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'button',
			name: 'РассчитатьСтоимостьСписанияНУ',
			text: 'Рассчитать суммы',
			style: 'position:absolute;left:237px;top:21px;width:142px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтоимостьНУ1',
			text: 'Сумма (НУ):',
			style: 'position:absolute;left:6px;top:21px;width:64px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СтоимостьНУ1',
			style: 'position:absolute;left:72px;top:21px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'РеглВалюта9',
			text: 'РеглВалюта',
			style: 'position:absolute;left:154px;top:21px;width:60px;height:19px;text-align:center;',
		},
		{
			xtype: 'fieldset',
			title: 'Со счета учета списать сумму',
			style: 'position:absolute;left:6px;top:0px;width:664px;height:16px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСпособОтраженияРасходовПриВключенииВСтоимость',
			text: 'Способ отражения расходов:',
			style: 'position:absolute;left:6px;top:0px;width:226px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'СпособОтраженияРасходовПриВключенииВСтоимость',
			width: 433,
			height: 19,
			style: 'position:absolute;left:237px;top:0px;width:433px;height:19px;',
		},
					]
				},
				{
					title:'Стоимость не включается в расходы',
				},
			]
		},
					]
				},
				{
					title:'Налоговый учет (УСН)',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Стоимость (сумма расходов УСН):',
			style: 'position:absolute;left:6px;top:6px;width:226px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СтоимостьУСН',
			style: 'position:absolute;left:304px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Срок полезного использования (УСН), мес.:',
			style: 'position:absolute;left:6px;top:31px;width:226px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СрокПолезногоИспользованияУСН',
			style: 'position:absolute;left:304px;top:31px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Дата приобретения:',
			style: 'position:absolute;left:437px;top:6px;width:114px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаПриобретения',
			width: 120,
			height: 19,
			style: 'position:absolute;left:562px;top:6px;width:120px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:205px;width:676px;height:165px;',
			height: 165,width: 676,
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
					width:'100',
					dataIndex:'ОсновноеСредство',
					flex:1,
				},
				{
					text:'Дата оплаты',
					width:'100',
					dataIndex:'ДатаОплаты',
					flex:1,
				},
				{
					text:'Сумма оплаты',
					width:'100',
					dataIndex:'СуммаОплаты',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПринятиеКУчетуОС/ВыбратьПоСсылке/100'},
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
						name:'СуммаОплаты',
					},
				]
			},
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:92px;width:676px;height:76px;',
			height: 76,width: 676,
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
					width:'100',
					dataIndex:'ОсновноеСредство',
					flex:1,
				},
				{
					text:'Инвентарный номер',
					width:'100',
					dataIndex:'ИнвентарныйНомер',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПринятиеКУчетуОС/ВыбратьПоСсылке/100'},
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
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:7px;top:179px;width:675px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПорядокВключенияСтоимостиВСоставРасходовУСН',
			text: 'Порядок включения стоимости в состав расходов (УСН):',
			style: 'position:absolute;left:6px;top:56px;width:294px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ПорядокВключенияСтоимостиВСоставРасходовУСН',
			width: 378,
			height: 19,
			style: 'position:absolute;left:304px;top:56px;width:378px;height:19px;',
		},
					]
				},
				{
					title:'Дополнительно',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Ответственный:',
			style: 'position:absolute;left:6px;top:7px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Ответственный',
			width: 210,
			height: 19,
			style: 'position:absolute;left:92px;top:7px;width:210px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСрокПолезногоИспользованияБУ',
			text: 'Полезный срок использования, мес.:',
			style: 'position:absolute;left:12px;top:219px;width:196px;height:19px;text-align:left;',
		},
					]
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'налог. учете',
			style: 'position:absolute;left:570px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетФактура',
			text: 'Счет-фактура:',
			style: 'position:absolute;left:8px;top:485px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ГиперссылкаСчетФактура',
			text: 'Ввести счет-фактуру',
			style: 'position:absolute;left:90px;top:485px;width:608px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:706px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Структура подчиненности документа',
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
				'-',
				{
					text:'Дт/кт',
				},
				{
					text:'Дт/кт',
				},
			]
		},
	]
});