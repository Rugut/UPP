Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Справочник_УчетныеЗаписиДокументооборота_ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:908px;height:504px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Учетные записи документооборота',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:908px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Серверы документооборота',
				},
				{
					text:'Налоговые органы',
				},
				{
					text:'Органы ПФР',
				},
				'-',
					]
				},
				'-',
				{
					text:'Расширенные настройки',
				},
				'-',
				{
					text:'Проверить',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:479px;width:908px;height:25px;',
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
			name: 'Надпись21',
			text: 'Почтовый адрес:',
			style: 'position:absolute;left:8px;top:84px;width:130px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресЭлектроннойПочты',
			style: 'position:absolute;left:155px;top:84px;width:499px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отсутствует',
			style: 'position:absolute;left:155px;top:60px;width:91px;height:15px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:200px;width:646px;height:271px;',
			height: 271,width: 646,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:49px;width:646px;height:27px;',
			height: 27,width: 646,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьНалоговыйОрган',
			text: 'Налоговый орган:',
			style: 'position:absolute;left:0px;top:0px;width:95px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НалоговыйОрган',
			style: 'position:absolute;left:147px;top:0px;width:499px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:80px;width:646px;height:191px;',
			height: 191,width: 646,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'SMTPСервер',
			style: 'position:absolute;left:147px;top:28px;width:124px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'POP3Сервер',
			style: 'position:absolute;left:147px;top:62px;width:124px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПортSMTP',
			style: 'position:absolute;left:287px;top:28px;width:58px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПортPOP3',
			style: 'position:absolute;left:287px;top:62px;width:58px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Логин',
			style: 'position:absolute;left:362px;top:62px;width:81px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПарольPOP3',
			style: 'position:absolute;left:458px;top:62px;width:67px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: '',
			style: 'position:absolute;left:362px;top:31px;width:13px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяПользователяSMTP',
			style: 'position:absolute;left:382px;top:28px;width:61px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПарольSMTP',
			style: 'position:absolute;left:458px;top:28px;width:67px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСертификатРуководителя',
			text: 'Руководитель:',
			style: 'position:absolute;left:0px;top:118px;width:130px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СертификатРуководителя',
			style: 'position:absolute;left:147px;top:118px;width:499px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Кнопка1',
			text: 'Проверить
параметры
доступа',
			style: 'position:absolute;left:539px;top:28px;width:107px;height:53px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:172px;width:646px;height:19px;',
			height: 19,width: 646,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСертификатДляЦелейШифрования',
			text: 'Для целей шифрования:',
			style: 'position:absolute;left:0px;top:0px;width:130px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СертификатДляШифрования',
			style: 'position:absolute;left:147px;top:0px;width:499px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:145px;width:646px;height:27px;',
			height: 27,width: 646,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСертификатГлавногоБухгалтера',
			text: 'Главный бухгалтер:',
			style: 'position:absolute;left:0px;top:0px;width:130px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СертификатГлавногоБухгалтера',
			style: 'position:absolute;left:147px;top:0px;width:499px;height:19px;',
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
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:646px;height:49px;',
			height: 49,width: 646,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СерверДокументооборота',
			style: 'position:absolute;left:147px;top:23px;width:499px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись23',
			text: 'Сервер документооборота:',
			style: 'position:absolute;left:0px;top:23px;width:140px;height:19px;text-align:left;',
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
			name: 'Надпись36',
			text: 'Назначение:',
			style: 'position:absolute;left:8px;top:34px;width:130px;height:15px;text-align:left;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:661px;top:33px;width:239px;height:438px;',
			height: 438,width: 239,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:14px;width:239px;height:424px;',
			height: 424,width: 239,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Пометка',
					flex:1,
				},
				{
					text:'Пользователь',
					width:'144',
					dataIndex:'Пользователь',
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
						name:'Пользователь',
					},
				]
			},
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:111px;width:646px;height:24px;',
			height: 24,width: 646,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьКодАбонента',
			text: 'Идентификатор абонента:',
			style: 'position:absolute;left:0px;top:0px;width:142px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИдентификаторАбонента',
			style: 'position:absolute;left:147px;top:0px;width:290px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКодСпецоператора',
			text: 'Идентификатор спецоператора:',
			style: 'position:absolute;left:444px;top:0px;width:169px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИдентификаторСпецоператора',
			style: 'position:absolute;left:610px;top:0px;width:36px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:136px;width:646px;height:64px;',
			height: 64,width: 646,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьАвтоматическийОбмен',
			text: 'Автоматический обмен:',
			style: 'position:absolute;left:0px;top:40px;width:130px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИнтервалАвтообмена',
			text: '',
			style: 'position:absolute;left:147px;top:40px;width:499px;height:15px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Автонастройка:',
			style: 'position:absolute;left:0px;top:2px;width:83px;height:15px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:147px;top:2px;width:499px;height:30px;',
			height: 30,width: 499,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РежимАвтонастройки',
			style: 'position:absolute;left:0px;top:0px;width:290px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'НастроитьАвтоматическиСейчас',
			text: 'Настроить автоматически сейчас',
			style: 'position:absolute;left:296px;top:0px;width:203px;height:19px;',
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
			name: 'Надпись38',
			text: 'Спецоператор связи:',
			style: 'position:absolute;left:8px;top:57px;width:130px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпецоператорСвязи',
			style: 'position:absolute;left:254px;top:57px;width:400px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Документооборот с ФНС',
			style: 'position:absolute;left:155px;top:34px;width:151px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Документооборот с ПФР',
			style: 'position:absolute;left:316px;top:34px;width:151px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Документооборот с Росстатом',
			style: 'position:absolute;left:477px;top:34px;width:177px;height:15px;',
		},
	]
});