Ext.define('Справочники.НалоговыеОрганы.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 483,width: 694,
	iconCls: 'bogus',
	title: 'Налоговые органы',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:149px;top:33px;width:48px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:149px;top:58px;width:537px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:149px;top:133px;width:537px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Вид',
			style: 'position:absolute;left:149px;top:108px;width:537px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолноеНаименование',
			style: 'position:absolute;left:149px;top:83px;width:537px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИНН',
			style: 'position:absolute;left:96px;top:181px;width:104px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КПП',
			style: 'position:absolute;left:265px;top:181px;width:96px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Адрес',
			style: 'position:absolute;left:96px;top:229px;width:590px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Телефон',
			style: 'position:absolute;left:96px;top:254px;width:290px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресЭлектроннойПочты',
			style: 'position:absolute;left:442px;top:254px;width:244px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресСайта',
			style: 'position:absolute;left:96px;top:279px;width:590px;height:19px;',
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
					text:'ОсновныеДействияФормыСохранить',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресЭлектроннойПочтыДляПриемаОтчетности',
			style: 'position:absolute;left:188px;top:373px;width:498px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сертификат',
			style: 'position:absolute;left:188px;top:398px;width:498px;height:19px;',
		},
	]
});