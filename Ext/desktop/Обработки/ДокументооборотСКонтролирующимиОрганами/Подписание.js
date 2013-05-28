Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Подписание',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:630px;height:499px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Подписание исходных сообщений',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:62px;width:614px;height:404px;',
			height: 404,width: 614,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Пометка',
					flex:1,
				},
				{
					text:'Наименование',
					width:'120',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Дата создания',
					width:'112',
					dataIndex:'ДатаСоздания',
					flex:1,
				},
				{
					text:'Дата завершения',
					width:'112',
					dataIndex:'ДатаЗакрытия',
					flex:1,
				},
				{
					text:'Первичное сообщение',
					width:'25',
					dataIndex:'ПервичноеСообщение',
					flex:1,
				},
				{
					text:'Подтверждение отправки от почтового сервера',
					width:'25',
					dataIndex:'ПодтверждениеОтправки',
					flex:1,
				},
				{
					text:'Подтверждение на подтверждение отправки',
					width:'25',
					dataIndex:'ОтветНаПодтверждениеОтправки',
					flex:1,
				},
				{
					text:'Подтверждение доставки документа в налоговый орган',
					width:'25',
					dataIndex:'ПодтверждениеДоставки',
					flex:1,
				},
				{
					text:'Протокол входного контроля документа',
					width:'25',
					dataIndex:'ПротоколПроверки',
					flex:1,
				},
				{
					text:'Подтверждение на протокол входного контроля документа',
					width:'25',
					dataIndex:'ПодтверждениеНаПротоколПроверки',
					flex:1,
				},
				{
					text:'',
					width:'25',
					dataIndex:'ОтветНаЗапрос',
					flex:1,
				},
				{
					text:'',
					width:'28',
					dataIndex:'ОтветНаОтветНаЗапрос',
					flex:1,
				},
				{
					text:'',
					width:'28',
					dataIndex:'Возврат',
					flex:1,
				},
				{
					text:'',
					width:'28',
					dataIndex:'ПодтверждениеВозврата',
					flex:1,
				},
				{
					text:'Вид отчета',
					width:'120',
					dataIndex:'Отчет',
					flex:1,
				},
				{
					text:'Период',
					width:'120',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'Вид',
					width:'36',
					dataIndex:'Вид',
					flex:1,
				},
				{
					text:'Организация',
					width:'120',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Налоговый орган',
					width:'120',
					dataIndex:'НалоговыйОрган',
					flex:1,
				},
				{
					text:'Дата последнего сообщения',
					width:'112',
					dataIndex:'ДатаПоследнегоСообщения',
					flex:1,
				},
				{
					text:'Тип цикла обмена',
					width:'120',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Вид услуги',
					width:'100',
					dataIndex:'ВидУслуги',
					flex:1,
				},
				{
					text:'Формат ответа',
					width:'100',
					dataIndex:'ФорматОтвета',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Пометка',
					},
					{
						name:'Наименование',
					},
					{
						name:'ДатаСоздания',
					},
					{
						name:'ДатаЗакрытия',
					},
					{
						name:'ПервичноеСообщение',
					},
					{
						name:'ПодтверждениеОтправки',
					},
					{
						name:'ОтветНаПодтверждениеОтправки',
					},
					{
						name:'ПодтверждениеДоставки',
					},
					{
						name:'ПротоколПроверки',
					},
					{
						name:'ПодтверждениеНаПротоколПроверки',
					},
					{
						name:'ОтветНаЗапрос',
					},
					{
						name:'ОтветНаОтветНаЗапрос',
					},
					{
						name:'Возврат',
					},
					{
						name:'ПодтверждениеВозврата',
					},
					{
						name:'Отчет',
					},
					{
						name:'Период',
					},
					{
						name:'Вид',
					},
					{
						name:'Организация',
					},
					{
						name:'НалоговыйОрган',
					},
					{
						name:'ДатаПоследнегоСообщения',
					},
					{
						name:'Тип',
					},
					{
						name:'ВидУслуги',
					},
					{
						name:'ФорматОтвета',
					},
				]
			},
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Сертификат',
			width: 534,
			height: 19,
			style: 'position:absolute;left:88px;top:10px;width:534px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСертификат',
			text: 'Сертификат:',
			style: 'position:absolute;left:8px;top:12px;width:71px;height:15px;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:8px;top:35px;width:614px;height:3px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:474px;width:630px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Подписать',
				},
				'-',
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:38px;width:614px;height:24px;',
			dock: 'top',
			items:
			[
				{
					text:'Установить флажки',
				},
				{
					text:'Снять флажки',
				},
				'-',
				{
					text:'Обновить',
				},
				'-',
				{
					text:'&Изменить',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'(Список отборов)',
				},
				'-',
				{
					text:'(История отборов)',
				},
					]
				},
				{
					text:'Отключить отбор',
				},
			]
		},
	]
});