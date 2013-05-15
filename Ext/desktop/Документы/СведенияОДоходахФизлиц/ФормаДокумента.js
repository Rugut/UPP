Ext.define('Документы.СведенияОДоходахФизлиц.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:630px;height:580px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Сведения о доходах физических лиц для ИФНС',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
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
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:176px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:81px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:527px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:527px;width:526px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:263px;width:614px;height:259px;',
			height: 259,width: 614,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Физическое лицо',
					width:'220',
					dataIndex:'ФизЛицо',
					flex:1,
				},
				{
					text:'№ справки',
					width:'60',
					dataIndex:'НомерСправки',
					flex:1,
				},
				{
					text:'Ставка',
					width:'40',
					dataIndex:'Ставка',
					flex:1,
				},
				{
					text:'Код по ОКАТО',
					width:'80',
					dataIndex:'КодПоОКАТО',
					flex:1,
				},
				{
					text:'КПП',
					width:'80',
					dataIndex:'КПП',
					flex:1,
				},
				{
					text:'Передано на взыскание',
					width:'80',
					dataIndex:'ПереданоНаВзыскание',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СведенияОДоходахФизлиц/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ФизЛицо',
					},
					{
						name:'НомерСправки',
					},
					{
						name:'Ставка',
					},
					{
						name:'КодПоОКАТО',
					},
					{
						name:'КПП',
					},
					{
						name:'ПереданоНаВзыскание',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'НадписьНалоговыйПериод',
			text: 'Налоговый период:',
			style: 'position:absolute;left:336px;top:57px;width:101px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'НалоговыйПериод',
			style: 'position:absolute;left:437px;top:57px;width:82px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТелефон',
			text: 'Телефон:',
			style: 'position:absolute;left:336px;top:105px;width:101px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КонтактныйТелефонОтветственного',
			style: 'position:absolute;left:437px;top:105px;width:82px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Сведения формируются для ...',
			style: 'position:absolute;left:8px;top:131px;width:614px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДолжностьОтветственного',
			text: 'Должность:',
			style: 'position:absolute;left:8px;top:105px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДолжностьОтветственного',
			style: 'position:absolute;left:96px;top:105px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИдентификаторФайла',
			style: 'position:absolute;left:267px;top:152px;width:252px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ОбновитьИдентификаторФайла',
			text: '',
			style: 'position:absolute;left:519px;top:152px;width:22px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Справки о доходах',
			style: 'position:absolute;left:8px;top:223px;width:614px;height:16px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'передачи в ИФНС с идентификатором файла:',
			style: 'position:absolute;left:14px;top:152px;width:252px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'выдачи на руки сотрудникам - сводные',
			style: 'position:absolute;left:14px;top:174px;width:251px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'выдачи на руки сотрудникам - в разрезе ставок и кодов по ОКАТО',
			style: 'position:absolute;left:14px;top:196px;width:478px;height:19px;',
		},
			]
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:555px;width:630px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Получить файл',
				},
				'-',
				{
					text:'Получить файл на диск',
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
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:239px;width:614px;height:24px;',
			dock: 'top',
			items:
			[
				{
					text:'физ.лицами, получавшими доходы',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:630px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
	]
});