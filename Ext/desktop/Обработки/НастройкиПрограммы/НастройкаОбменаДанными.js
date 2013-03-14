Ext.define('Обработки.НастройкиПрограммы.НастройкаОбменаДанными',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:749px;height:327px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка обмена данными',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:302px;width:749px;height:25px;',
			items:
			[
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
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:8px;width:166px;height:286px;',
			height: 286,width: 166,
			columns:
			[
				{
					text:'Представление',
					width:'100',
				},
				{
					text:'Имя раздела',
					width:'100',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:179px;top:8px;width:562px;height:286px;',
			height: 286,width: 562,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Обмен данными',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать механизм автоматического обмена данными при возникновении определенных событий (при входе в программу, завершении работы с программой, появлении каталога)',
			style: 'position:absolute;left:12px;top:120px;width:512px;height:32px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПрефиксУзлаДляРИБ',
			text: 'Префикс номеров документов и справочников текущей информационной базы:',
			style: 'position:absolute;left:12px;top:48px;width:248px;height:32px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПрефиксУзлаРаспределеннойИнформационнойБазы',
			style: 'position:absolute;left:268px;top:48px;width:44px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПрефиксВнутреннегоШтрихкода',
			text: 'Префикс внутреннего штрихкода:',
			style: 'position:absolute;left:12px;top:88px;width:248px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПрефиксВнутреннегоШтрихкода',
			style: 'position:absolute;left:268px;top:88px;width:44px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Сохранять информацию о месте создания объектов информационных баз',
			style: 'position:absolute;left:12px;top:158px;width:405px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись61',
			text: 'При выполнении обменов данными будет регистрироваться информация о месте создания объектов.',
			style: 'position:absolute;left:28px;top:177px;width:527px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьРазделаОбменДанными',
			text: 'Обмен данными',
			style: 'position:absolute;left:12px;top:6px;width:168px;height:30px;',
		},
					]
				},
				{
					title:'Обмен ЮНИСКАН',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись22',
			text: 'GLN Предприятия:',
			style: 'position:absolute;left:12px;top:48px;width:100px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'GLNПредприятия',
			style: 'position:absolute;left:291px;top:48px;width:165px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись23',
			text: 'GCP Международный номер (префикс) предприятия:',
			style: 'position:absolute;left:12px;top:96px;width:272px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПрефиксШтрихКодаРегистрацииНоменклатуры',
			style: 'position:absolute;left:291px;top:96px;width:165px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись24',
			text: 'Пароль регистрации в ЮНИСКАН:',
			style: 'position:absolute;left:12px;top:72px;width:176px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПарольРегистрацииВЮнискан',
			style: 'position:absolute;left:291px;top:72px;width:165px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРаздела13',
			text: 'Обмен с БД ЮНИСКАН/GS1 Russia',
			style: 'position:absolute;left:12px;top:6px;width:348px;height:30px;',
		},
					]
				},
			]
		},
	]
});