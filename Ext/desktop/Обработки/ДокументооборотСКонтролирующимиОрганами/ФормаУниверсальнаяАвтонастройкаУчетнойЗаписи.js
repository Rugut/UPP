Ext.require(['Данные.Обработки.ДокументооборотСКонтролирующимиОрганами'], function () 
{
	Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ФормаУниверсальнаяАвтонастройкаУчетнойЗаписи',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:597px;height:350px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Автоматическая настройка параметров учетной записи',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Укажите идентификатор абонента, присвоенный вам специализированным оператором связи при подключении.',
			style: 'position:absolute;left:8px;top:166px;width:581px;height:18px;text-align:left;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:8px;top:249px;width:581px;height:3px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Перед автоматической настройкой убедитесь в том, что на компьютере установлен криптопровайдер (средство криптографической защиты информации), и в системе зарегистрирован абонентский сертификат. Регистрация абонентского сертификата с привязкой к закрытому ключу производится средствами криптопровайдера.',
			style: 'position:absolute;left:70px;top:265px;width:519px;height:52px;text-align:left;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:8px;top:62px;width:581px;height:3px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Обратите внимание, возможность автоматической настройки параметров учетной записи поддерживается не всеми специализированными операторами связи (удостоверяющими центрами).',
			style: 'position:absolute;left:8px;top:8px;width:581px;height:41px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СпецоператорИУЦ',
			width: 337,
			height: 19,
			style: 'position:absolute;left:252px;top:77px;width:337px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись46',
			text: 'Спецоператор связи (удостоверяющий центр):',
			style: 'position:absolute;left:8px;top:76px;width:241px;height:20px;',
		},
		{
			xtype: 'label',
			name: 'Надпись47',
			text: 'Идентификатор абонента:',
			style: 'position:absolute;left:8px;top:142px;width:241px;height:20px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИдентификаторАбонента',
			width: 337,
			height: 19,
			style: 'position:absolute;left:252px;top:143px;width:337px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись48',
			text: 'Выберите из списка поддерживаемых того специализированного оператора связи (удостоверяющий центр), с которым у вас заключен договор.',
			style: 'position:absolute;left:8px;top:99px;width:581px;height:30px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Организация',
			width: 337,
			height: 19,
			style: 'position:absolute;left:252px;top:197px;width:337px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись49',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:197px;width:241px;height:20px;',
		},
		{
			xtype: 'label',
			name: 'Надпись50',
			text: 'Укажите организацию для которой будет настроена учетная запись.',
			style: 'position:absolute;left:8px;top:220px;width:581px;height:18px;text-align:left;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:325px;width:597px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Настроить сейчас',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
	]
	});
});