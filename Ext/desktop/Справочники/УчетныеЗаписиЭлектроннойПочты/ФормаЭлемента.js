Ext.define('Справочники.УчетныеЗаписиЭлектроннойПочты.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 450,width: 582,
	iconCls: 'bogus',
	title: 'Настройки учетной записи',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:517px;top:33px;width:57px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:100px;top:57px;width:474px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресЭлектроннойПочты',
			style: 'position:absolute;left:100px;top:33px;width:368px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:582px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:582px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:105px;width:566px;height:312px;',
			height: 312,width: 566,
			items:
			[
				{
					title:'Подключение',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'SMTPСервер',
			style: 'position:absolute;left:98px;top:26px;width:350px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'POP3Сервер',
			style: 'position:absolute;left:98px;top:120px;width:350px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПортSMTP',
			style: 'position:absolute;left:492px;top:26px;width:66px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПортPOP3',
			style: 'position:absolute;left:492px;top:120px;width:66px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Логин',
			style: 'position:absolute;left:98px;top:144px;width:198px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Пароль',
			style: 'position:absolute;left:354px;top:144px;width:204px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЛогинSMTP',
			style: 'position:absolute;left:98px;top:70px;width:198px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПарольSMTP',
			style: 'position:absolute;left:354px;top:70px;width:204px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВремяОжиданияСервера',
			style: 'position:absolute;left:157px;top:178px;width:44px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПроверитьНастройкиУчетнойЗаписи',
			text: 'Проверить настройки учетной записи',
			style: 'position:absolute;left:6px;top:208px;width:220px;height:20px;',
		},
					]
				},
				{
					title:'Письма',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоДнейУдаленияПисемССервера',
			style: 'position:absolute;left:212px;top:25px;width:44px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИнтервалАвтоПолученияОтправкиСообщений',
			style: 'position:absolute;left:63px;top:71px;width:44px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтветственныйЗаАвтоПолучениеОтправкуСообщений',
			style: 'position:absolute;left:429px;top:71px;width:129px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДействиеАвтополученияОтправкиСообщений',
			style: 'position:absolute;left:212px;top:71px;width:114px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИнтервалАвтоматическойУстановкиОтметкиРассмотрено',
			style: 'position:absolute;left:212px;top:145px;width:44px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИнтервалАвтосохраненияПисем',
			style: 'position:absolute;left:212px;top:95px;width:44px;height:19px;',
		},
					]
				},
				{
					title:'ПредметыПисем',
					items:
					[
					]
				},
				{
					title:'Доступ',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:552px;height:256px;',
			height: 256,width: 552,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Пользователь',
				},
				{
					text:'Администрирование',
				},
				{
					text:'Чтение',
				},
				{
					text:'Запись',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:552px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Подпись',
					items:
					[
					]
				},
				{
					title:'ГруппыПисем',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:50px;width:552px;height:236px;',
			height: 236,width: 552,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:26px;width:552px;height:24px;',
			items:
			[
				{
					text:'ПереместитьВверх',
				},
				{
					text:'ПереместитьВверх',
				},
				{
					text:'ПереместитьВниз',
				},
				{
					text:'Действие',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие10',
				},
				{
					text:'ПереместитьВниз',
				},
			]
		},
					]
				},
				{
					title:'Дополнительно',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГруппаВходящие',
			style: 'position:absolute;left:157px;top:27px;width:401px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГруппаИсходящие',
			style: 'position:absolute;left:157px;top:51px;width:401px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГруппаУдаленные',
			style: 'position:absolute;left:157px;top:75px;width:401px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГруппаЧерновики',
			style: 'position:absolute;left:157px;top:99px;width:401px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьПомеченныеНаУдаление',
			text: 'Удалить помеченные на удаление письма',
			style: 'position:absolute;left:6px;top:224px;width:246px;height:20px;',
		},
					]
				},
				{
					title:'Фильтры',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:552px;height:256px;',
			height: 256,width: 552,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Использование',
				},
				{
					text:'Код',
				},
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:552px;height:24px;',
			items:
			[
				{
					text:'ПереместитьВверх',
				},
				{
					text:'ПереместитьВверх',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие',
				},
				{
					text:'Подменю',
				},
				{
					text:'ПереместитьВниз',
				},
				{
					text:'ПереместитьВниз',
				},
			]
		},
					]
				},
				{
					title:'ЭлектронныеДокументы',
					items:
					[
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НазначениеУчетнойЗаписи',
			style: 'position:absolute;left:100px;top:81px;width:474px;height:19px;',
		},
	]
});