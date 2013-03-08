Ext.define('Справочники.ХранилищеДополнительнойИнформации.ФормаЗапросаПерезаписиФайлов',
	{
	extend: 'Ext.window.Window',
	height: 95,width: 508,
	iconCls: 'bogus',
	title: 'Сохранение файла',
	
	items: [
		{
			xtype: 'button',
			name: 'КнопкаДаДляВсех',
			text: 'Да для всех',
			style: 'position:absolute;left:108px;top:68px;width:92px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДа',
			text: 'Да',
			style: 'position:absolute;left:8px;top:68px;width:92px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНетДляВсех',
			text: 'Нет для всех',
			style: 'position:absolute;left:308px;top:68px;width:92px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНет',
			text: 'Нет',
			style: 'position:absolute;left:208px;top:68px;width:92px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОтмена',
			text: 'Отмена',
			style: 'position:absolute;left:408px;top:68px;width:92px;height:19px;',
		},
	]
});