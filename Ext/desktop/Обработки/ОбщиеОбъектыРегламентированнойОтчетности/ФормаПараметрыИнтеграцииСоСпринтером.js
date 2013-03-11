Ext.define('Обработки.ОбщиеОбъектыРегламентированнойОтчетности.ФормаПараметрыИнтеграцииСоСпринтером',
	{
	extend: 'Ext.window.Window',
	height: 128,width: 598,
	iconCls: 'bogus',
	title: 'Параметры интеграции с ПК ""Спринтер"" компании ""Такском""',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:103px;width:598px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'КнопкаПрочитатьСКлючевойДискеты',
				},
				{
					text:'КнопкаОтмена',
				},
				{
					text:'КнопкаОК',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодАбонента',
			style: 'position:absolute;left:189px;top:11px;width:64px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КаталогОтправкиДанныхОтчетности',
			style: 'position:absolute;left:189px;top:76px;width:401px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КаталогПрограммыЭлектроннойПочты',
			style: 'position:absolute;left:189px;top:53px;width:401px;height:19px;',
		},
	]
});