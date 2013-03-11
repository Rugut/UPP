Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ПодписиПодДокументами',
	{
	extend: 'Ext.window.Window',
	height: 422,width: 832,
	iconCls: 'bogus',
	title: 'Электронно-цифровые подписи',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:158px;width:816px;height:256px;',
			height: 256,width: 816,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'ЭЦПСертификат',
				},
				{
					text:'ИмяФайла',
				},
				{
					text:'Размер',
				},
				{
					text:'ЭЦПСтатусПроверки',
				},
				{
					text:'ЭЦПИмяПодписанногоФайла',
				},
				{
					text:'ЭЦПЭтоПодписьАбонента',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументПредставление',
			style: 'position:absolute;left:149px;top:97px;width:675px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТранспортноеСообщениеПредставление',
			style: 'position:absolute;left:149px;top:70px;width:675px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:133px;width:816px;height:24px;',
			items:
			[
				{
					text:'Удалить',
				},
				{
					text:'Проверить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Добавить',
				},
				{
					text:'ПоказатьСертификат',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЦиклОбмена',
			style: 'position:absolute;left:149px;top:43px;width:675px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТранспортноеСообщение',
			style: 'position:absolute;left:149px;top:70px;width:675px;height:19px;',
		},
	]
});