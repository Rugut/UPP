Ext.define('Справочники.НалоговыеОрганы.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:694px;height:483px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Налоговые органы',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:8px;top:33px;width:135px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:149px;top:33px;width:48px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:58px;width:135px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:149px;top:58px;width:537px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРодитель',
			text: 'Вышестоящий НО:',
			style: 'position:absolute;left:8px;top:133px;width:135px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:149px;top:133px;width:537px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВид',
			text: 'Вид налогового органа:',
			style: 'position:absolute;left:8px;top:108px;width:135px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Вид',
			style: 'position:absolute;left:149px;top:108px;width:537px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПолноеНаименование',
			text: 'Полное наименование:',
			style: 'position:absolute;left:8px;top:83px;width:135px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолноеНаименование',
			style: 'position:absolute;left:149px;top:83px;width:537px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Учет налогоплательщиков',
			style: 'position:absolute;left:14px;top:330px;width:157px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Прием налоговой отчетности',
			style: 'position:absolute;left:188px;top:330px;width:173px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИНН',
			text: 'ИНН:',
			style: 'position:absolute;left:14px;top:181px;width:48px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИНН',
			style: 'position:absolute;left:96px;top:181px;width:104px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКПП',
			text: 'КПП:',
			style: 'position:absolute;left:220px;top:181px;width:32px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КПП',
			style: 'position:absolute;left:265px;top:181px;width:96px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдрес',
			text: 'Адрес:',
			style: 'position:absolute;left:14px;top:229px;width:54px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Адрес',
			style: 'position:absolute;left:96px;top:229px;width:590px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТелефон',
			text: 'Телефон:',
			style: 'position:absolute;left:14px;top:254px;width:54px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Телефон',
			style: 'position:absolute;left:96px;top:254px;width:290px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдресЭлектроннойПочты',
			text: 'E-mail:',
			style: 'position:absolute;left:399px;top:254px;width:36px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресЭлектроннойПочты',
			style: 'position:absolute;left:442px;top:254px;width:244px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдресСайта',
			text: 'Web-сайт:',
			style: 'position:absolute;left:14px;top:279px;width:54px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресСайта',
			style: 'position:absolute;left:96px;top:279px;width:590px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:431px;width:77px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:431px;width:590px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:694px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:458px;width:694px;height:25px;',
			items:
			[
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
			name: 'НадписьАдресЭлектроннойПочты1',
			text: 'Адрес электронной почты:',
			style: 'position:absolute;left:14px;top:373px;width:157px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресЭлектроннойПочтыДляПриемаОтчетности',
			style: 'position:absolute;left:188px;top:373px;width:498px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСертификат',
			text: 'Сертификат:',
			style: 'position:absolute;left:14px;top:398px;width:157px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сертификат',
			style: 'position:absolute;left:188px;top:398px;width:498px;height:19px;',
		},
	]
});