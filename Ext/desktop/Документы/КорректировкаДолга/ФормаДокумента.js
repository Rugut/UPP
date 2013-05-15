Ext.define('Документы.КорректировкаДолга.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:652px;height:475px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Корректировка долга',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:176px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:423px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'Дата',
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:423px;width:548px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:652px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'label',
			name: 'НадписьКонтрагент',
			text: 'Контрагент:',
			style: 'position:absolute;left:8px;top:81px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Контрагент',
			style: 'position:absolute;left:96px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:450px;width:652px;height:25px;',
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
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:130px;width:636px;height:261px;',
			height: 261,width: 636,
			items:
			[
				{
					title:'Взаиморасчеты',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:622px;height:205px;',
			height: 205,width: 622,
			columns:
			[
				{
					text:'№',
					width:'30',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Вид задолженности',
					width:'100',
					dataIndex:'ВидЗадолженности',
					flex:1,
				},
				{
					text:'Договор контрагента',
					width:'120',
					dataIndex:'ДоговорКонтрагента',
					flex:1,
				},
				{
					text:'Сделка',
					width:'120',
					dataIndex:'Сделка',
					flex:1,
				},
				{
					text:'Документ расчетов с контрагентом',
					width:'120',
					dataIndex:'ДокументРасчетовСКонтрагентом',
					flex:1,
				},
				{
					text:'Валюта',
					width:'45',
					dataIndex:'Валюта',
					flex:1,
				},
				{
					text:'Сумма',
					width:'100',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'Курс взаиморасчетов',
					width:'137',
					dataIndex:'КурсВзаиморасчетов',
					flex:1,
				},
				{
					text:'Кратность взаиморасчетов',
					width:'100',
					dataIndex:'КратностьВзаиморасчетов',
					flex:1,
				},
				{
					text:'Сумма расчетов (по бух. учету)',
					width:'100',
					dataIndex:'СуммаРегл',
					flex:1,
				},
				{
					text:'Сумма списания задолженности (НУ)',
					width:'100',
					dataIndex:'СуммаНУ',
					flex:1,
				},
				{
					text:'Счет учета расчетов',
					width:'100',
					dataIndex:'СчетУчетаРасчетов',
					flex:1,
				},
				{
					text:'Счет учета авансов',
					width:'100',
					dataIndex:'СчетУчетаАвансов',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КорректировкаДолга/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ВидЗадолженности',
					},
					{
						name:'ДоговорКонтрагента',
					},
					{
						name:'Сделка',
					},
					{
						name:'ДокументРасчетовСКонтрагентом',
					},
					{
						name:'Валюта',
					},
					{
						name:'Сумма',
					},
					{
						name:'КурсВзаиморасчетов',
					},
					{
						name:'КратностьВзаиморасчетов',
					},
					{
						name:'СуммаРегл',
					},
					{
						name:'СуммаНУ',
					},
					{
						name:'СчетУчетаРасчетов',
					},
					{
						name:'СчетУчетаАвансов',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоКт1',
			text: 'Субконто 1:',
			style: 'position:absolute;left:321px;top:53px;width:112px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетКтНУ',
			text: 'Счет:',
			style: 'position:absolute;left:321px;top:147px;width:112px;height:19px;text-align:left;',
		},
					]
				},
				{
					title:'Уменьшение долга',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:622px;height:205px;',
			height: 205,width: 622,
			columns:
			[
				{
					text:'№',
					width:'30',
					dataIndex:'НомерCтроки',
					flex:1,
				},
				{
					text:'Вид задолженности',
					width:'100',
					dataIndex:'ВидЗадолженности',
					flex:1,
				},
				{
					text:'Договор контрагента',
					width:'120',
					dataIndex:'ДоговорКонтрагента',
					flex:1,
				},
				{
					text:'Сделка',
					width:'120',
					dataIndex:'Сделка',
					flex:1,
				},
				{
					text:'Документ расчетов с контрагентом',
					width:'120',
					dataIndex:'ДокументРасчетовСКонтрагентом',
					flex:1,
				},
				{
					text:'Валюта',
					width:'45',
					dataIndex:'Валюта',
					flex:1,
				},
				{
					text:'Сумма',
					width:'97',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'Курс взаиморасчетов',
					width:'118',
					dataIndex:'КурсВзаиморасчетов',
					flex:1,
				},
				{
					text:'Кратность взаиморасчетов',
					width:'100',
					dataIndex:'КратностьВзаиморасчетов',
					flex:1,
				},
				{
					text:'Сумма расчетов (по бух. учету)',
					width:'100',
					dataIndex:'СуммаРегл',
					flex:1,
				},
				{
					text:'Сумма списания задолженности (НУ)',
					width:'100',
					dataIndex:'СуммаНУ',
					flex:1,
				},
				{
					text:'Счет учета расчетов',
					width:'100',
					dataIndex:'СчетУчетаРасчетов',
					flex:1,
				},
				{
					text:'Счет учета авансов',
					width:'100',
					dataIndex:'СчетУчетаАвансов',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КорректировкаДолга/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерCтроки',
					},
					{
						name:'ВидЗадолженности',
					},
					{
						name:'ДоговорКонтрагента',
					},
					{
						name:'Сделка',
					},
					{
						name:'ДокументРасчетовСКонтрагентом',
					},
					{
						name:'Валюта',
					},
					{
						name:'Сумма',
					},
					{
						name:'КурсВзаиморасчетов',
					},
					{
						name:'КратностьВзаиморасчетов',
					},
					{
						name:'СуммаРегл',
					},
					{
						name:'СуммаНУ',
					},
					{
						name:'СчетУчетаРасчетов',
					},
					{
						name:'СчетУчетаАвансов',
					},
				]
			},
		},
					]
				},
				{
					title:'Вспомогательный счет',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВспомогательныйСчет',
			text: 'Вспомогательный счет:',
			style: 'position:absolute;left:6px;top:6px;width:134px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВспомогательныйСчет',
			style: 'position:absolute;left:173px;top:6px;width:102px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконто1',
			text: 'Субконто 1:',
			style: 'position:absolute;left:6px;top:29px;width:161px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Субконто1',
			style: 'position:absolute;left:173px;top:29px;width:216px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконто2',
			text: 'Субконто 2:',
			style: 'position:absolute;left:6px;top:52px;width:161px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Субконто2',
			style: 'position:absolute;left:173px;top:52px;width:216px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконто3',
			text: 'Субконто 3:',
			style: 'position:absolute;left:6px;top:75px;width:161px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Субконто3',
			style: 'position:absolute;left:173px;top:75px;width:216px;height:19px;',
		},
					]
				},
				{
					title:'Счета учета',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСчетДт1',
			text: 'Счет:',
			style: 'position:absolute;left:6px;top:30px;width:120px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СчетДт',
			style: 'position:absolute;left:128px;top:30px;width:101px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоДт1',
			text: 'Субконто 1:',
			style: 'position:absolute;left:6px;top:53px;width:120px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СубконтоДт1',
			style: 'position:absolute;left:128px;top:53px;width:184px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоДт2',
			text: 'Субконто 2:',
			style: 'position:absolute;left:6px;top:76px;width:120px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СубконтоДт2',
			style: 'position:absolute;left:128px;top:76px;width:184px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоДт3',
			text: 'Субконто 3:',
			style: 'position:absolute;left:6px;top:99px;width:120px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СубконтоДт3',
			style: 'position:absolute;left:128px;top:99px;width:184px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Счет для дебиторской задолженности',
			style: 'position:absolute;left:6px;top:7px;width:306px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Счет для кредиторской задолженности',
			style: 'position:absolute;left:321px;top:7px;width:306px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоррСчет1',
			text: 'Счет:',
			style: 'position:absolute;left:321px;top:30px;width:112px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СчетКт',
			style: 'position:absolute;left:434px;top:30px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СубконтоКт1',
			style: 'position:absolute;left:433px;top:53px;width:185px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоКт2',
			text: 'Субконто 2:',
			style: 'position:absolute;left:321px;top:76px;width:112px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СубконтоКт2',
			style: 'position:absolute;left:433px;top:76px;width:185px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоКт3',
			text: 'Субконто 3:',
			style: 'position:absolute;left:321px;top:99px;width:112px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СубконтоКт3',
			style: 'position:absolute;left:433px;top:99px;width:185px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетДтНУ',
			text: 'Счет:',
			style: 'position:absolute;left:6px;top:147px;width:120px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СчетДтНУ',
			style: 'position:absolute;left:132px;top:147px;width:101px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоДтНУ1',
			text: 'Субконто 1:',
			style: 'position:absolute;left:6px;top:170px;width:120px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СубконтоДтНУ1',
			style: 'position:absolute;left:132px;top:170px;width:180px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоДтНУ2',
			text: 'Субконто 2:',
			style: 'position:absolute;left:6px;top:193px;width:120px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СубконтоДтНУ2',
			style: 'position:absolute;left:132px;top:193px;width:180px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоДтНУ3',
			text: 'Субконто 3:',
			style: 'position:absolute;left:6px;top:216px;width:120px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СубконтоДтНУ3',
			style: 'position:absolute;left:132px;top:216px;width:180px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Счет списания дебиторской задолженности в НУ',
			style: 'position:absolute;left:6px;top:125px;width:306px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Счет списания кредиторской задолженности в НУ',
			style: 'position:absolute;left:321px;top:125px;width:307px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СчетКтНУ',
			style: 'position:absolute;left:433px;top:147px;width:101px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоКтНУ1',
			text: 'Субконто 1:',
			style: 'position:absolute;left:321px;top:170px;width:112px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СубконтоКтНУ1',
			style: 'position:absolute;left:433px;top:170px;width:185px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоКтНУ2',
			text: 'Субконто 2:',
			style: 'position:absolute;left:321px;top:193px;width:112px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СубконтоКтНУ2',
			style: 'position:absolute;left:433px;top:193px;width:185px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоКтНУ3',
			text: 'Субконто 3:',
			style: 'position:absolute;left:321px;top:216px;width:112px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СубконтоКтНУ3',
			style: 'position:absolute;left:433px;top:216px;width:185px;height:19px;',
		},
					]
				},
				{
					title:'Дополнительно',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:10px;top:10px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПодразделениеКомпании',
			style: 'position:absolute;left:100px;top:10px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:9px;top:38px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Ответственный',
			style: 'position:absolute;left:100px;top:38px;width:220px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'бух. учете',
			style: 'position:absolute;left:479px;top:33px;width:70px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'упр. учете',
			style: 'position:absolute;left:403px;top:33px;width:70px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомер1',
			text: 'Отражать в:',
			style: 'position:absolute;left:336px;top:33px;width:67px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьКонтрагентКредитор',
			text: 'Кредитор:',
			style: 'position:absolute;left:336px;top:81px;width:67px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КонтрагентКредитор',
			style: 'position:absolute;left:403px;top:81px;width:241px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаДокумента',
			text: 'Валюта:',
			style: 'position:absolute;left:8px;top:105px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВалютаДокумента',
			style: 'position:absolute;left:96px;top:105px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДоговорКонтрагента',
			text: 'Договор:',
			style: 'position:absolute;left:335px;top:105px;width:113px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДоговорКонтрагента',
			style: 'position:absolute;left:403px;top:105px;width:241px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДебиторскаяЗадолженность',
			text: 'НадписьДебиторскаяЗадолженность',
			style: 'position:absolute;left:8px;top:399px;width:222px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКредиторскаяЗадолженность',
			text: 'НадписьКредиторскаяЗадолженность',
			style: 'position:absolute;left:249px;top:399px;width:236px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВзаимозачет',
			text: 'НадписьВзаимозачет',
			style: 'position:absolute;left:501px;top:399px;width:143px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать вспомогательный счет',
			style: 'position:absolute;left:336px;top:57px;width:234px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'налог. учете',
			style: 'position:absolute;left:558px;top:33px;width:80px;height:19px;',
		},
	],
	dockedItems:
	[
	]
});