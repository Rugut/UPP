Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ИзменениеИнтервалаАвтообменаПоУчетнойЗаписи',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:404px;height:172px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка автоматического обмена',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:147px;width:404px;height:25px;',
			items:
			[
				{
					text:'',
				},
				'-',
				{
					text:'Отмена',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьИнформация',
			text: 'Параметры автоматического обмена задаются отдельно для каждого пользователя каждой учетной записи.',
			style: 'position:absolute;left:8px;top:8px;width:388px;height:29px;',
		},
		{
			xtype: 'label',
			name: 'НадписьУчетнаяЗапись',
			text: 'Учетная запись:',
			style: 'position:absolute;left:8px;top:48px;width:93px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПользователь',
			text: 'Пользователь:',
			style: 'position:absolute;left:8px;top:71px;width:93px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'УчетнаяЗапись',
			text: '',
			style: 'position:absolute;left:106px;top:48px;width:290px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Пользователь',
			text: '',
			style: 'position:absolute;left:106px;top:71px;width:290px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'выключен',
			style: 'position:absolute;left:106px;top:100px;width:290px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПользователь1',
			text: 'Автообмен:',
			style: 'position:absolute;left:8px;top:100px;width:93px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'обмениваться каждые ',
			style: 'position:absolute;left:106px;top:123px;width:138px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИнтервалАвтообмена',
			style: 'position:absolute;left:244px;top:120px;width:55px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМинут',
			text: 'мин.',
			style: 'position:absolute;left:304px;top:123px;width:28px;height:15px;',
		},
	]
});